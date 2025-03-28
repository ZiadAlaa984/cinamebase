export const fetchFn = async (url: string) =>
  fetch(url, {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2YWVhZDJmMzk3NTQ0OGEzMzFkMzYxY2FiMDM0ZGM1MCIsIm5iZiI6MTcxOTk0ODY4Ny4wNzYzNzksInN1YiI6IjY2NjZlN2M1MjBjNjQ0ZDAyZjE1Y2ZjNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.w39eBIlbJMKUAtNuUIe7jkJwEz6GwPMo8hDzFarLKY4",
    },
  }).then((res) => res.json());

// fetch DATA Movie or Series
export const Data = async (page = 1, type = "airing_today", kind = "tv") => {
  return await fetchFn(
    `https://api.themoviedb.org/3/${kind}/${type}?language=en-US&page=${page}`
  );
};
// fetch DATA Movie or Series
export const SearchData = async (params: string, kind: string) => {
  return await fetchFn(
    `https://api.themoviedb.org/3/search/${kind}?query=${params}&language=en-US&page=1`
  );
};

export const Cast = async (id: string, kind = "tv") => {
  return await fetchFn(`https://api.themoviedb.org/3/${kind}/${id}/credits`);
};
export const SearchById = async (id: string, kind = "movie") => {
  return await fetchFn(
    `https://api.themoviedb.org/3/${kind}/${id}?language=en-US`
  );
};
export const getImageLogo = async (id: string, kind = "movie") => {
  return await fetchFn(`https://api.themoviedb.org/3/${kind}/${id}/images`);
};
export const Recommended = async (id: string, kind = "tv") => {
  return await fetchFn(
    `https://api.themoviedb.org/3/${kind}/${id}/recommendations`
  );
};
