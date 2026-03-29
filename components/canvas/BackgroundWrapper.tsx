"use client";

import dynamic from 'next/dynamic';

const Background3D = dynamic(() => import('@/components/canvas/Background3D'), { ssr: false });

export default function BackgroundWrapper() {
  return <Background3D />;
}
