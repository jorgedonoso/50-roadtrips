export interface ContentfulItem {
  sys: { id: string };
  fields: {
    title: string;
    city: string;
    state: string;
    coordinates: {
      lon: number; // Can't be changed. I use correct `long` when mapping to Location.
      lat: number;
    };
    photo: { sys: { id: string } };
  };
}
