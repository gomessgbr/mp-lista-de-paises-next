"use client";

import { useGetAllContries } from "@/hooks/useGetAllCountries";
import Image from "next/image";
import worldIcon from "./_assets/world.svg";
import CountriesCard from "./_components/CoutriesCard";

export default function Home() {
  const { countries } = useGetAllContries();

  return (
    <main className="bg-gray-100 min-h-screen flex flex-col items-center">
      <nav className="w-full h-16 flex place-content-center bg-white py-10">
        <section className="container flex items-center gap-3">
          <Image src={worldIcon} alt="mundo" width={48} height={48} />
          <h1 className="text-2xl font-bold">Países do mundo</h1>
        </section>
      </nav>

      <section className="grid grid-cols-1  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 w-full container gap-2 mt-12">
        {countries.map((countrie) => {
          return (
            <CountriesCard
              key={countrie.name.common}
              name={countrie.name.common}
              ptName={countrie.translations.por.official}
              flag={countrie.flags.svg}
              flagAlt={countrie.flags.alt || countrie.altSpellings[0]}
            />
          );
        })}
      </section>
    </main>
  );
}
