"use client";

import { useGetAllContries } from "@/hooks/useGetAllCountries";

import CountriesCard from "./_components/CoutriesCard";

export default function Home() {
  const { countries } = useGetAllContries();

  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 w-full container gap-2 mt-16">
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
  );
}
