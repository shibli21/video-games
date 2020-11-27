import { useQuery } from "react-query";
import { fetchNewGames } from "../api/apiCalls";
import { Games } from "../types/global";

export default function useNewGames() {
  return useQuery<Games, Error>(["newGames"], fetchNewGames, {
    staleTime: 2000,
  });
}
