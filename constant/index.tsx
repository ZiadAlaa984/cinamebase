import { MdMovie } from "react-icons/md";
import { RiMovie2AiFill } from "react-icons/ri";

export const DATA = {
  movie: [
    {
      value: "now_playing",
      label: "Now Playing",
    },
    {
      value: "popular",
      label: "popular",
    },
    {
      value: "top_rated",
      label: "Top Rated",
    },
    {
      value: "upcoming",
      label: "Up Coming",
    },
  ],
  kind: [
    {
      value: "movie",
      label: "Movies",
    },
    {
      value: "tv",
      label: "Series",
    },
  ],
  tv: [
    {
      value: "top_rated",
      label: "Top Rated",
    },
    {
      value: "popular",
      label: "popular",
    },
    {
      value: "airing_today",
      label: "Airing Today",
    },
    {
      value: "on_the_air",
      label: "On The Air",
    },
  ],
  search: [
    {
      value: "movie",
      label: "Movies",
      icon: <MdMovie />,
    },
    {
      value: "tv",
      label: "Series",
      icon: <RiMovie2AiFill />,
    },
  ],
};
