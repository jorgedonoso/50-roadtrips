import { Coordinates } from "./Coordinates";

export interface Location {
  id: string;
  title: string;
  city: string;
  state: string;
  coordinates: Coordinates;
  photoId: string;
  imageUrl: string;
  imageThumbUrl: string;
}
