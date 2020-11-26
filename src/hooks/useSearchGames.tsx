import { useQuery } from "react-query";
import { fetchSearchGames } from "../api/apiCalls";
import { Games } from "../types/global";

export default function useSearchGames(slug) {
  return useQuery<Games, Error>(["searchGames", slug], fetchSearchGames, {
    staleTime: 2000,
  });
}
