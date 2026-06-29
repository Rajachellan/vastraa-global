"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { normalizeImageSrc, shouldUnoptimizeImage } from "@/lib/image";

type Props = {
  image?: string;
  video?: string;
  alt: string;
  className?: string;
  imageClassName?: string;
  sizes?: string;
  priority?: boolean;
  fit?: "cover" | "contain";
};

const imgFillStyle: React.CSSProperties = {
  position: "absolute",
  inset: 0,
  width: "100%",
  height: "100%",
  objectFit: "cover",
};

/** Renders category/fabric media — video preferred, else image. */
export function FabricMedia({
  image,
  video,
  alt,
  className = "absolute inset-0 w-full h-full",
  imageClassName,
  sizes = "(max-width: 768px) 100vw, 25vw",
  priority = false,
  fit = "cover",
}: Props) {
  const [imgFailed, setImgFailed] = useState(false);
  const poster = image ? normalizeImageSrc(image) : undefined;
  const imageSrc = poster || "";
  const videoSrc = video ? normalizeImageSrc(video) : "";

  useEffect(() => {
    setImgFailed(false);
  }, [imageSrc]);

  if (videoSrc) {
    return (
      <video
        src={videoSrc}
        poster={poster}
        muted
        loop
        playsInline
        autoPlay
        preload="metadata"
        className={className}
      />
    );
  }

  const placeholderClass = `${className} bg-accent/5 flex items-center justify-center text-accent/40 text-sm`;

  if (!imageSrc || imgFailed) {
    return (
      <div className={placeholderClass}>
        {imgFailed ? "Image unavailable" : "No media"}
      </div>
    );
  }

  const objectFit = fit === "contain" ? "contain" : "cover";
  const imgStyle: React.CSSProperties = { ...imgFillStyle, objectFit };

  const useNativeImg =
    imageSrc.startsWith("/uploads/") ||
    imageSrc.startsWith("/assets/") ||
    imageSrc.includes("/uploads/") ||
    shouldUnoptimizeImage(imageSrc);

  if (useNativeImg) {
    return (
      <img
        key={imageSrc}
        src={imageSrc}
        alt={alt}
        className={imageClassName || className}
        style={imgStyle}
        onError={() => setImgFailed(true)}
      />
    );
  }

  return (
    <Image
      key={imageSrc}
      src={imageSrc}
      alt={alt}
      fill
      sizes={sizes}
      priority={priority}
      unoptimized={shouldUnoptimizeImage(imageSrc)}
      className={imageClassName || className}
      style={{ objectFit }}
      onError={() => setImgFailed(true)}
    />
  );
}
