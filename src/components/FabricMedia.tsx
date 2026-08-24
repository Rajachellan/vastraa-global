"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import { mediaCandidates } from "@/lib/api";
import { shouldUnoptimizeImage } from "@/lib/image";

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

/** Renders category/fabric media — video preferred, else image with CDN/API fallbacks. */
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
  const imageCandidates = useMemo(() => mediaCandidates(image || ""), [image]);
  const videoCandidates = useMemo(() => mediaCandidates(video || ""), [video]);
  const [imgIndex, setImgIndex] = useState(0);
  const [imgFailed, setImgFailed] = useState(imageCandidates.length === 0);

  const imageSrc = imageCandidates[imgIndex] || "";
  const videoSrc = videoCandidates[0] || "";
  const poster = imageCandidates[0];

  useEffect(() => {
    setImgIndex(0);
    setImgFailed(imageCandidates.length === 0);
  }, [image, imageCandidates.length]);

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
        {image?.trim() ? "Image unavailable" : "No media"}
      </div>
    );
  }

  const objectFit = fit === "contain" ? "contain" : "cover";
  const imgStyle: React.CSSProperties = { ...imgFillStyle, objectFit };

  const onImageError = () => {
    if (imgIndex + 1 < imageCandidates.length) {
      setImgIndex((i) => i + 1);
      return;
    }
    setImgFailed(true);
  };

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
        onError={onImageError}
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
      onError={onImageError}
    />
  );
}
