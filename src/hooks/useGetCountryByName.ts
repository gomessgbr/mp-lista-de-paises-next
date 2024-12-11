"use client";

import { ICountryByName } from "@/dto/countryByName";
import { API } from "@/services/apiConfig/api";
import { useCallback, useState } from "react";

export const useGetCountryByName = () => {
  const [country, setCountry] = useState<ICountryByName>();
  const getCountryByName = useCallback(async (countryName: string) => {
    const response = await API.get<ICountryByName[]>(`name/${countryName}`);
    const foundedCountry = response.data.find(
      (filtredCoutry) => filtredCoutry.name.common === countryName,
    );
    setCountry(foundedCountry);
  }, []);

  return {
    country,
    getCountryByName,
  };
};
