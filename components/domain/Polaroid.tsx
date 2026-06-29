import { Location } from "@/src/types/Location";
import Image from "next/image";
import { useState, useEffect } from "react";

export function Polaroid({
  location,
  isModal,
}: {
  location: Location;
  isModal: boolean;
}) {
  const [isLoading, setIsLoading] = useState(true);

  const photo = isModal
    ? {
        photoSize: 1080,
        photoUrl: location.imageUrl,
        containerClass:
          "cursor-pointer relative max-w-[90vw] max-h-[90vh] flex flex-col m-6 p-6 shadow-lg bg-white box-border",
        titleClass: "text-4xl",
        subTitleClass: "text-2xl mb-6",
        imageClass: "w-full h-full object-cover aspect-square",
        photoWrapper:
          "overflow-hidden bg-gray-100 flex-1 min-h-0 flex items-center justify-center relative",
      }
    : {
        photoSize: 256,
        photoUrl: location.imageThumbUrl,
        containerClass:
          "cursor-pointer bg-white p-4 shadow-lg w-64 transition-all duration-300 ease-out hover:shadow-xl hover:scale-105",
        titleClass: "text-sm",
        subTitleClass: "text-xs pb-3",
        imageClass: "w-full h-52 object-cover aspect-square",
        photoWrapper: "overflow-hidden bg-gray-100 relative",
      };

  const {
    photoSize,
    photoUrl,
    containerClass,
    titleClass,
    subTitleClass,
    imageClass,
    photoWrapper,
  } = photo;

  useEffect(() => {
    setIsLoading(true);
  }, [photoUrl]);

  return (
    <div className={containerClass}>
      <div className={photoWrapper}>
        {isLoading && (
          <div className="absolute inset-0 z-10 bg-gray-200 animate-pulse flex items-center justify-center">
            <span className="text-xs text-gray-400">Loading...</span>
          </div>
        )}

        <Image
          src={photoUrl}
          alt={location.title}
          width={photoSize}
          height={photoSize}
          className={`${imageClass} transition-opacity duration-300 ${
            isLoading ? "opacity-0" : "opacity-100"
          }`}
          onLoad={() => setIsLoading(false)}
        />
      </div>

      <div className="text-center pt-4 font-polaroid shrink-0">
        <p className={`${titleClass} uppercase tracking-widest text-gray-600`}>
          {location.title}
        </p>
        <p className={`${subTitleClass} text-gray-400`}>
          {location.city}, {location.state}
        </p>
      </div>
    </div>
  );
}
