<script >

import "/node_modules/flag-icons/css/flag-icons.min.css";
import { store } from '../data/store';
import axios from 'axios';


export default {
  name: "AppMain",
  components: {

  },
  data() {
    return {
      store,
      testo: "",
    };
  },
  methods: {
    /*metodo per cercare */
    change() {
      let indirizzoFilm = this.store.ApiFilm + this.testo;
      let indirizzoSerie = this.store.ApiSerie + this.testo;

      this.getApi(indirizzoFilm, indirizzoSerie)
    },
    /**metodo per generare axios in base a quello che mi serve */
    getApi(indirizzoFilm, indirizzoSerie) {

      axios.get(indirizzoFilm).then(oggetto => {
        this.store.ArrayFilm = [];
        this.store.ArrayFilm = oggetto.data;
        console.log(this.store.ArrayFilm, "film")
      });
      axios.get(indirizzoSerie).then(oggetto => {
        this.store.ArraySerie = [];
        this.store.ArraySerie = oggetto.data;
        console.log(this.store.ArraySerie, "serie")
      });

    },
    /**metodo per le bandiere */
    getFlag(nazione) {
      return `fi fi-${this.store.ForFlag[nazione]}`
    },
    /**metodo per gestire null di img */
    getImagForNull(oggetto) {

      if (oggetto.poster_path == null) {
        return "https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg";
      } else {
        return this.store.inizioImmagine + oggetto.poster_path;
      }
    },
    /**metodo per stelline */
    getStar(vote) {

      return Math.floor(vote / 2);
    },
  },
  mounted() {
  },

}
</script>

<template>
  <!--<pre>{{ this.store.Array.results }}</pre>-->
  <div class="container">
    <div class="row">
      <div class="col-12 m-2">
        <input v-model="testo" type="text" @keyup="change()" placeholder="Cerca">
      </div>
      <div class="col-12 bg-danger my-2">
        <h4>LISTA FILM</h4>
      </div>
      <!--section film-->
      <div class="col-12 d-flex flex-wrap justify-content-around">
        <!--inizio ciclo per schede-->
        <template v-for="oggetto in store.ArrayFilm.results">
          <div class="col-3 m-2 position-relative border border-light">
            <!--sezione immagine-->
            <div class="my-card position-absolute d-block">
              <img :src=getImagForNull(oggetto) alt="">
            </div>
            <!--sezione testo-->
            <div
              class="my-card position-absolute bg-black d-flex flex-column align-items-center justify-content-center text-center d-none">
              <p>Titolo:</p>
              <small>{{ oggetto.title }}</small>
              <!--<p>Titolo originale: {{ oggetto.original_title }}</p> -->
              <p>Lingua:</p>
              <span :class="getFlag(oggetto.original_language)"></span>
              <div class="d-flex mt-2">
                <p>Voto:</p>
                <!--mini ciclo per stelle-->
                <span v-for="voto in getStar(oggetto.vote_average)">
                  <i class="fa-solid fa-star"></i>
                </span>
              </div>
              <!--overview-->
              <div>
                <p>Descrizione:</p>
                <p class="tronca">{{ oggetto.overview }}</p>
              </div>


            </div>
          </div>
        </template>
      </div>


      <div class="col-12 bg-danger my-2">
        <h4>LISTA TELEFILM</h4>
      </div>
      <!--section telefilm-->
      <div class="col-12 d-flex flex-wrap justify-content-around">
        <!--inizio ciclo per schede-->
        <template v-for="oggetto in store.ArraySerie.results">
          <div class="col-3 m-2 position-relative border border-light">
            <!--sezione immagine-->
            <div class="my-card position-absolute d-block">
              <img :src=getImagForNull(oggetto) alt="">
            </div>
            <!--sezione testo-->
            <div
              class="my-card position-absolute bg-black d-flex flex-column align-items-center justify-content-center text-center d-none">
              <p>Titolo:</p>
              <small>{{ oggetto.name }} </small>
              <!--<p>Titolo originale: {{ oggetto.original_name }}</p>-->
              <p>Lingua:</p>
              <span :class="getFlag(oggetto.original_language)"></span>
              <div class="d-flex mt-2">
                <p>Voto:</p>
                <!--mini ciclo per stelle-->
                <p v-for="voto in getStar(oggetto.vote_average)">
                  <i class="fa-solid fa-star"></i>
                </p>
              </div>
              <div>
                <p>Descrizione:</p>
                <p class="tronca">{{ oggetto.overview }}</p>
              </div>

            </div>
          </div>
        </template>
      </div>


    </div>
  </div>
</template>

<style lang="scss" scoped>
div.col-3 {
  height: 400px;

  &:hover {

    div.d-block {
      display: none !important;
      ;
    }

    div.d-none {
      display: flex !important;
    }

    .tronca {
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      width: 250px;
    }
  }

  img {
    object-fit: cover;
  }
}

img,
.my-card {
  width: 100%;
  height: 100%;
}
</style>
