"use client";
import { useEffect, useState } from "react";
import { API } from "../services/apiConfig/api";
import { IContries } from "@/dto/countries";

export const useGetAllContries = () => {
  const [contries, setContries] = useState<IContries[]>([]);

  const fetchAllCountries = async () => {
    const response = await API.get<IContries[]>("all");
    console.log("response", response);
    // setContries(response.data);
  };

  useEffect(() => {
    fetchAllCountries();
  }, []);

  return {
    contries,
  };
};
