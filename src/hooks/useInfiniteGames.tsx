import { useInfiniteQuery } from "react-query";
import { fetchGames } from "../api/apiCalls";
import { Games } from "../types/global";

export default function useInfiniteGames() {
  return useInfiniteQuery<Games>("ifGames", fetchGames, {
    getFetchMore: (lastGroup) => {
      lastGroup.cursor = parseInt(lastGroup.next?.split("=")[1]);
      return lastGroup.cursor;
    },
  });
}
