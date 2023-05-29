<script >
import AppSectionCard from "./AppSectionCard.vue";

import { store } from '../data/store';
import axios from 'axios';


export default {
  name: "AppMain",
  components: {
    AppSectionCard,
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
        //console.log(this.store.ArrayFilm, "film")
      });
      axios.get(indirizzoSerie).then(oggetto => {
        this.store.ArraySerie = [];
        this.store.ArraySerie = oggetto.data;
        //console.log(this.store.ArraySerie, "serie")
      });

    },

  },

}
</script>

<template>
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
        <!--inizio ciclo per schede film-->
        <AppSectionCard v-for="oggetto in store.ArrayFilm.results" :oggetto="oggetto" />

      </div>


      <div class="col-12 bg-danger my-2">
        <h4>LISTA TELEFILM</h4>
      </div>
      <!--section telefilm-->
      <div class="col-12 d-flex flex-wrap justify-content-around">
        <!--inizio ciclo per schede telefilm-->
        <AppSectionCard v-for="oggetto in store.ArraySerie.results" :oggetto="oggetto" />

      </div>


    </div>
  </div>
</template>

<style lang="scss" scoped></style>
