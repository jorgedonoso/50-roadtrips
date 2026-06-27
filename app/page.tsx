import { regions } from "@/src/data/regions";
import Link from "next/link";

export default async function HomePage() {
  return (
    <div className="grid h-screen grid-cols-2 grid-rows-3 gap-4 p-4">
      {regions.map((gl) => (
        <Link
          key={gl.slug}
          className="flex items-center justify-center rounded bg-gray-100 text-2xl font-semibold"
          href={`/region/${gl.slug}`}
        >
          {gl.name}
        </Link>
      ))}
    </div>
  );
}
