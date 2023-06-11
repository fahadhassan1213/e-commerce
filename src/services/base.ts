import axios, { AxiosError } from "axios";

export const BaseService = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  headers: { "Content-Type": "application/json" },
});

export const errorHandler = (err: unknown) => {
  if (err instanceof AxiosError) {
    throw new Error(err?.response?.data);
  } else {
    throw err;
  }
};
