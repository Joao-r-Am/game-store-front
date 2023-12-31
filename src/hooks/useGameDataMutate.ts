import axios, { AxiosPromise } from "axios";
import { GameData } from "../interface/GameData";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const API_URL = "http://localhost:8080";

const postData = async (data: GameData): AxiosPromise<any> => {
  const response = await axios.post(API_URL + "/game", data);
  return response;
};

export function useGameDataMutate() {
  const queryClient = useQueryClient();
  const mutate = useMutation({
    mutationFn: postData,
    retry: 2,
    onSuccess: () => {
      queryClient.invalidateQueries(["game-data"]);
    },
  });

  return mutate;
}
