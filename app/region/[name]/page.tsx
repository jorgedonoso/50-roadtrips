import { Gallery } from "@/components/Gallery";
import { regions } from "@/src/data/regions";
import { getContentfulLocations } from "@/src/logic/contentfulLogic";
import { ILocation } from "@/src/types/Location";
import { Card } from "@ikefakis/react-polaroid-photo-deck";

type Props = {
  params: {
    name: string;
  };
};

export default async function RegionPage({ params }: Props) {
  const _params = await params;
  const regionSlug = _params.name;

  const locations = await getContentfulLocations();
  const regionLocations = filterLocationsByRegion(
    locations,
    regions,
    regionSlug,
  );

  const cards: Card[] = regionLocations.map((l) => ({
    url: l.imageUrl,
    date: `${l.city}, ${l.state}`,
    caption: l.title,
  }));

  return <Gallery cards={cards} />;
}

function filterLocationsByRegion(
  locations: ILocation[],
  regionsArray: any,
  regionName: string,
) {
  const region = regionsArray.find((r: any) => r.slug === regionName);

  if (!region) return [];

  return locations.filter((loc: any) => region.states.includes(loc.state));
}
