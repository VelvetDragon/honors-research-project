// src/components/ImageWithSkeleton.js
'use client';
import Image from 'next/image';
import { useState } from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import styles from '@/styles/ImageWithSkeleton.module.css';

export default function ImageWithSkeleton({ src, alt, width, height, className }) {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  return (
    <div className={styles.imageContainer}>
      {isLoading && !hasError && <Skeleton width={width} height={height} />}
      {hasError ? (
        <div className={styles.error}>Image failed to load.</div>
      ) : (
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          className={className}
          onLoadingComplete={() => setIsLoading(false)}
          onError={() => setHasError(true)}
          placeholder="blur"
          blurDataURL="/images/placeholder.png" // Ensure this placeholder exists
        />
      )}
    </div>
  );
}
