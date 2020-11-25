import { useQuery } from "react-query";
import { fetchUpcomingGames } from "../api/apiCalls";
import { Games } from "../types/global";

export default function useUpcomingGames() {
  return useQuery<Games, Error>(["upcomingGames"], fetchUpcomingGames, {
    staleTime: 2000,
  });
}
