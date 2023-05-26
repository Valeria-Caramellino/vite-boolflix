<script >

import  "/node_modules/flag-icons/css/flag-icons.min.css" ;
import { store } from '../data/store';
import axios from 'axios';


export default{
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
        change() {
          let indirizzoFilm = this.store.ApiFilm + this.testo;
          let indirizzoSerie = this.store.ApiSerie + this.testo;

          this.getApi(indirizzoFilm, indirizzoSerie)
        },   
        getApi(indirizzoFilm, indirizzoSerie) {

          axios.get(indirizzoFilm).then(oggetto => {
            this.store.ArrayFilm = [];
            this.store.ArrayFilm = oggetto.data;
          });
          axios.get(indirizzoSerie).then(oggetto => {
          this.store.ArraySerie = [];
          this.store.ArraySerie = oggetto.data;
          });
       
        },
        getFlag(nazione) {
            return `fi fi-${this.store.ForFlag[nazione]}`
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
          <h2>LISTA FILM</h2>
        </div>
<!--section film-->
        <div class="col-12 d-flex flex-wrap justify-content-around">
          <template v-for="oggetto in store.ArrayFilm.results">
            
          <div class="col-3 m-2 p-2">
            <div>
              <img :src=this.store.inizioImmagine+oggetto.poster_path alt="">
            </div>
            <div>
              <p>Titolo:</p>
              <span>{{ oggetto.title }}</span>
              <!--<p>Titolo originale: {{ oggetto.original_title }}</p> -->
          
              <p>Lingua:</p>
              <span :class="getFlag(oggetto.original_language)"></span>
              
              <p>Voto:</p>
              <span>{{ oggetto.vote_average }}</span>
            </div>
            
          </div>
          </template>
        </div>


        <div class="col-12 bg-danger my-2">
          <h2>LISTA TELEFILM</h2>
        </div>
<!--section telefilm-->
        <div class="col-12 d-flex flex-wrap justify-content-around">
          <template v-for="oggetto in store.ArraySerie.results">
            
            <div class="col-3 m-2 p-2">
              <div>
                <img :src=this.store.inizioImmagine+oggetto.poster_path alt="">
              </div>
              <div>
                <p>Titolo:</p>
                <span>{{ oggetto.name }} </span>
                <!--<p>Titolo originale: {{ oggetto.original_name }}</p>-->
                <p>Lingua:</p>
                <span :class="getFlag(oggetto.original_language)"></span>
                <p>Voto:</p>
                <span>{{ oggetto.vote_average }}</span>
              </div>
                
            </div>
          </template>
        </div>


      </div>
    </div>
</template>

<style lang="scss" scoped>
.flag{
  width: 20px;
}
  img{
    width: 100%;
  }
</style>
