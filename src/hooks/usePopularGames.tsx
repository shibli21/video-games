import { useQuery } from "react-query";
import { fetchPopularGames } from "../api/apiCalls";
import { Games } from "../types/global";

export default function usePopularGames() {
  return useQuery<Games, Error>(["popularGames"], fetchPopularGames, {
    staleTime: 2000,
  });
}
