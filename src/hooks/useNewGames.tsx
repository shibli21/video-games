import { useQuery } from "react-query";
import { fetchNewGames } from "../api/apiCalls";
import { Games } from "../types/global";

export default function useNewGames() {
  return useQuery<Games, Error>(["popularGames"], fetchNewGames, {
    staleTime: 2000,
  });
}
