import L from "leaflet";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import shadowIcon from "leaflet/dist/images/marker-shadow.png";

export const OpenStreetMarkerIcon = new L.Icon({
  iconUrl: typeof markerIcon === "string" ? markerIcon : markerIcon.src,
  iconRetinaUrl:
    typeof markerIcon2x === "string" ? markerIcon2x : markerIcon2x.src,
  shadowUrl: typeof shadowIcon === "string" ? shadowIcon : shadowIcon.src,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});
