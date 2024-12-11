"use client";
import { useEffect, useState } from "react";
import { API } from "../services/apiConfig/api";
import { ICountries } from "@/dto/countries";

export const useGetAllContries = () => {
  const [countries, setCountries] = useState<ICountries[]>([]);

  const fetchAllCountries = async () => {
    const response = await API.get<ICountries[]>("all");
    console.log("response", response);
    setCountries(response.data);
  };

  useEffect(() => {
    fetchAllCountries();
  }, []);

  return {
    countries,
  };
};
