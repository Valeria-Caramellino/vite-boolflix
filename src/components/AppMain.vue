<script >


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
       
        }
    },
    mounted() {
    },
   
}
</script>

<template>
 
  
  <!--
  <pre>{{ this.store.Array.results }}</pre>
-->
  
    <div class="container">
      <div class="row">
        <div class="col-12 m-2">
          <input v-model="testo" type="text" @keyup="change()" placeholder="Cerca">
          <button @click="change()" class="m-2">Lista iniziale</button>
        </div>
        <div class="col-12 bg-danger my-2">
          <h2>LISTA FILM</h2>
        </div>
        <div class="col-12 d-flex flex-wrap justify-content-around">
          <template v-for="oggetto in store.ArrayFilm.results">
            
          <div class="col-3 m-2 p-2">
            
              <img :src=this.store.inizioImmagine+oggetto.backdrop_path alt="">
            
            
            <p>Titolo:{{ oggetto.title }} </p>
            <!--
            <p>Titolo originale: {{ oggetto.original_title }}</p>-->
            <img :src =" `https://flagcdn.com/w20/${oggetto.original_language}.png`" alt="" class="flag">
            <p>Voto: {{ oggetto.vote_average }}</p>
          </div>
          </template>
        </div>


        <div class="col-12 bg-danger my-2">
          <h2>LISTA TELEFILM</h2>
        </div>
        <div class="col-12 d-flex flex-wrap justify-content-around">
          <template v-for="oggetto in store.ArraySerie.results">
            
            <div class="col-3 m-2 p-2">
                <img :src=this.store.inizioImmagine+oggetto.backdrop_path alt="">
                <p>Titolo:{{ oggetto.name }} </p>
            <!--
                <p>Titolo originale: {{ oggetto.original_name }}</p>-->
                <img :src =" `https://flagcdn.com/w20/${oggetto.original_language}.png`" alt="" class="flag">
                <p>Voto: {{ oggetto.vote_average }}</p>
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
