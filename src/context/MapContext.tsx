"use client";

import { createContext, useContext, useState, ReactNode } from "react";
import { Coordinates } from "../types/Coordinates";

interface MapContextType {
  activeStates: string[];
  regionName: string | undefined;
  setHighlight: (states: string[], name?: string) => void;
  coordinates?: Coordinates;
  setCoordinates: (coordinates?: Coordinates) => void;
}

const MapContext = createContext<MapContextType | undefined>(undefined);

export function MapProvider({ children }: { children: ReactNode }) {
  const [activeStates, setActiveStates] = useState<string[]>([]);
  const [regionName, setRegionName] = useState<string | undefined>(undefined);
  const [coordinates, setCoordinatesState] = useState<Coordinates | undefined>(
    undefined,
  );

  const setHighlight = (states: string[], name?: string) => {
    setActiveStates(states);
    setRegionName(name);
  };

  const setCoordinates = (coords?: Coordinates) => {
    setCoordinatesState(coords);
  };

  return (
    <MapContext.Provider
      value={{
        activeStates,
        regionName,
        coordinates,
        setHighlight,
        setCoordinates,
      }}
    >
      {children}
    </MapContext.Provider>
  );
}

export function useMapContext() {
  const context = useContext(MapContext);
  if (!context)
    throw new Error("useMapContext must be used inside MapProvider");
  return context;
}
