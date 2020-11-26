import { HTTP_METHODS } from "./../types/global";
import { createApiRequest } from "./axios";
import { lastYear, currentDate, nextYear } from "./../utils/formatDate";

const popularGames = `games?dates=${lastYear},${currentDate}&ordering=-rating&page_size=10`;
const upcomingGames = `games?dates=${currentDate},${nextYear}&ordering=-rating&page_size=10`;
const newGames = `games?dates=${lastYear},${currentDate}&ordering=-released&page_size=10`;

export const fetchPopularGames = async () => {
  return createApiRequest(`${popularGames}`, HTTP_METHODS.GET, {});
};

export const fetchUpcomingGames = async () => {
  return createApiRequest(`${upcomingGames}`, HTTP_METHODS.GET, {});
};

export const fetchNewGames = async () => {
  return createApiRequest(`${newGames}`, HTTP_METHODS.GET, {});
};

export const fetchGame = async (_, slug: string) => {
  return createApiRequest(`games/${slug}`, HTTP_METHODS.GET, {});
};

export const fetchSearchGames = async (_, slug: string) => {
  return createApiRequest(`games?search=${slug}`, HTTP_METHODS.GET, {});
};
