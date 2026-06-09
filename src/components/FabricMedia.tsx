"use client";

import Image from "next/image";
import { useState } from "react";
import { normalizeImageSrc, shouldUnoptimizeImage } from "@/lib/image";

type Props = {
  image?: string;
  video?: string;
  alt: string;
  className?: string;
  imageClassName?: string;
  sizes?: string;
  priority?: boolean;
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
  className = "absolute inset-0 w-full h-full object-cover",
  imageClassName,
  sizes = "(max-width: 768px) 100vw, 25vw",
  priority = false,
}: Props) {
  const [imgFailed, setImgFailed] = useState(false);
  const poster = image ? normalizeImageSrc(image) : undefined;
  const imageSrc = poster || "";
  const videoSrc = video ? normalizeImageSrc(video) : "";

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

  if (!imageSrc || imgFailed) {
    return (
      <div className={`${className} bg-accent/10 flex items-center justify-center text-accent/40 text-sm`}>
        {imgFailed ? "Image unavailable" : "No media"}
      </div>
    );
  }

  const useNativeImg =
    imageSrc.startsWith("/uploads/") ||
    imageSrc.startsWith("/assets/") ||
    shouldUnoptimizeImage(imageSrc);

  if (useNativeImg) {
    return (
      <img
        src={imageSrc}
        alt={alt}
        className={imageClassName || className}
        style={imgFillStyle}
        onError={() => setImgFailed(true)}
      />
    );
  }

  return (
    <Image
      src={imageSrc}
      alt={alt}
      fill
      sizes={sizes}
      priority={priority}
      unoptimized={shouldUnoptimizeImage(imageSrc)}
      className={imageClassName || className}
      onError={() => setImgFailed(true)}
    />
  );
}
