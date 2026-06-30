"use client";

import GallerySection from "@/components/GallerySection";
import { HeaderSection } from "@/components/HeaderSection";
import MapSection from "@/components/MapSection";
import { MapProvider } from "@/src/context/MapContext";

export default function MapClient() {
  return (
    <MapProvider>
      <div className="flex h-screen flex-col bg-zinc-100">
        <HeaderSection />
        <MapSection />
        <GallerySection />
      </div>
    </MapProvider>
  );
}
