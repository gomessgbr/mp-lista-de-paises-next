import axios from "axios";

const BASE_URL = "https://restcountries.com/v3.1/";
export const API = axios.create({
  baseURL: BASE_URL,
});
