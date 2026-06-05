"use client";

import Image from "next/image";
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
  const poster = image ? normalizeImageSrc(image) : undefined;
  const imageSrc = poster || "";

  if (video) {
    return (
      <video
        src={video}
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

  if (!imageSrc) {
    return (
      <div className={`${className} bg-accent/10 flex items-center justify-center text-accent/40 text-sm`}>
        No media
      </div>
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
    />
  );
}
