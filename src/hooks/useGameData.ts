import axios, { AxiosPromise } from "axios";
import { GameData } from "../interface/GameData";
import { useQuery } from "@tanstack/react-query";

const API_URL = "http://localhost:8080";

const fetchData = async (): AxiosPromise<GameData[]> => {
  const response = await axios.get(API_URL + "/game");
  return response;
};

export function useGameData() {
  const query = useQuery({
    queryFn: fetchData,
    queryKey: ["game-data"],
    retry: 2,
  });

  return {
    ...query,
    data: query.data?.data,
  };
}
