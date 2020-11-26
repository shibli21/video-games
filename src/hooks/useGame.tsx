import { useQuery } from "react-query";
import { fetchGame } from "../api/apiCalls";
import { Game } from "../types/global";

export default function useGame(slug) {
  return useQuery<Game, Error>(["games", slug], fetchGame, {
    staleTime: 2000,
  });
}
