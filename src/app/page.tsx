"use client";

import { useGetAllContries } from "@/hooks/useGetAllCountries";
import Image from "next/image";
import worldIcon from "./_assets/world.svg";

export default function Home() {
  const { contries } = useGetAllContries();
  return (
    <main className="bg-gray-100 min-h-screen flex flex-col items-center">
      <nav className="w-full h-16 flex place-content-center bg-white py-10">
        <section className="container flex items-center gap-3">
          <Image src={worldIcon} alt="mundo" width={48} height={48} />
          <h1 className="text-2xl font-bold">Países do mundo</h1>
        </section>
      </nav>

      <section className="grid grid-cols-1  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 w-full container gap-2 mt-12"></section>
    </main>
  );
}
