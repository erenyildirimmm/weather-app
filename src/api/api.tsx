import axios, { AxiosResponse } from "axios";

export const getData = async (apiUrl: string): Promise<AxiosResponse> => {
  try {
    const response: AxiosResponse = await axios.get(apiUrl);
    return response;
  } catch (error) {
    throw new Error("Veri alınamadı: " + error);
  }
};