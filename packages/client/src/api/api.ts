import { AxiosResponse } from "axios";
import axios from "../config/axios.ts";
import { LoginResponse, SignupData } from "./api.types.ts";

export const loginUser = async (email: string, password: string): Promise<LoginResponse> => {
  const response: AxiosResponse<LoginResponse> = await axios.post("/auth/login", { email, password });
  return response.data;
};

export const registerUser = async (data: SignupData): Promise<string> => {
  const response: AxiosResponse = await axios.post("/auth/signup", data);
  return response.data;
};