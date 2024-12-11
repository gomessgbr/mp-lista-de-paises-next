"use client";
import Image from "next/image";
import Link from "next/link";

interface ICountriesCard {
  name: string;
  ptName: string;
  flag: string;
  flagAlt: string;
}

export default function CountriesCard({
  name,
  ptName,
  flag,
  flagAlt,
}: ICountriesCard) {
  return (
    <Link href={`/country/${name}`}>
      <article
        className="h-64 min-w-full flex flex-col p-2 bg-white border-2 rounded-xl hover:border-indigo-200 transition-all hover:shadow-xl"
        key={name}
      >
        <div className="relative w-full h-40 p-2 overflow-hidden rounded-xl">
          <Image src={flag} alt={flagAlt} className="object-cover" fill />
        </div>
        <span className="text-lg font-bold text-center mt-4">{ptName}</span>
      </article>
    </Link>
  );
}
