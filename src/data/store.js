import { reactive } from "vue";

export const store = reactive({
  loading: true,
  Array: [],
  MyKey: "api_key=1847c7cbe402614342fdc15b9be4bd97",
  linkSenzaAll:
    "https://api.themoviedb.org/3/search/movie?api_key=1847c7cbe402614342fdc15b9be4bd97&query=",
  link: "https://api.themoviedb.org/3/search/movie?api_key=1847c7cbe402614342fdc15b9be4bd97&query=all",
  inizioImmagine: "https://image.tmdb.org/t/p/w342",
});
