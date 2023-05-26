import { reactive } from "vue";

export const store = reactive({
  loading: true,
  img: "https://www.bed-and-breakfast.it/img/tipologie-viaggio/mare/slider/elba.jpg",
  ArraySerie: [],
  ArrayFilm: [],
  MyKey: "api_key=1847c7cbe402614342fdc15b9be4bd97",
  ApiFilm:
    "https://api.themoviedb.org/3/search/movie?api_key=1847c7cbe402614342fdc15b9be4bd97&query=",

  inizioImmagine: "https://image.tmdb.org/t/p/w342",
  ApiSerie:
    "https://api.themoviedb.org/3/search/tv?api_key=1847c7cbe402614342fdc15b9be4bd97&query=",
});
