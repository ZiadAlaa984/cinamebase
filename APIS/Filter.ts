import { fetchFn } from "./APIS";
export const Genres = async (kind: string = "movie") => {
  return await fetchFn(
    `https://api.themoviedb.org/3/genre/${kind}/list?language=en`
  );
};
