<script >
import { store } from '../data/store';
import axios from 'axios';

export default{
  name: "AppMain",
  
  data(){
    return{
      store,
      testo:"",
    }
  },
  methods:{
    changeFilm(){
            console.log(this.testo)

            let indirizzo = this.store.linkSenzaAll + this.testo

           
            axios.get(indirizzo).then(oggetto =>{
              this.store.Array = [];
              this.store.Array=oggetto.data
            
            });
        },
    chiamataDati() {

      this.store.loading = true;

      axios.get(this.store.link).then(oggetto => {

      console.log("Ricevuto:", oggetto.data)

      this.store.Array = oggetto.data  ;

      this.store.loading = false;

      console.log("alla fine viene questo", this.store.Array)
      });
    }
  },
  mounted(){
    this.chiamataDati()
  }
}
</script>

<template>
 
  
  <!--
  <pre>{{ this.store.Array.results }}</pre>
-->
  
    <div class="container">
      <div class="row">
        <div class="col-12 m-2">
          <input v-model="testo" type="text" @keyup="changeFilm">
          <button class="m-2">prova</button>
        </div>
        <div class="col-12 d-flex flex-wrap">
          <template v-for="oggetto in store.Array.results">
          <div class="col-3 m-2 p-2">
            <img :src=this.store.inizioImmagine+oggetto.backdrop_path alt="">
            <p>Titolo:{{ oggetto.title }} </p>
            <p>Titolo originale: {{ oggetto.original_title }}</p>
            <p>Lingua: {{ oggetto.original_language }}</p>
            <p>Voto: {{ oggetto.vote_average }}</p>
          </div>
          </template>
        </div>
      </div>
    </div>
    <!--
    <br>
    <hr>
      <ul>
        
        <li>Titolo:{{ oggetto.title }} </li>
        <li>Titolo originale: {{ oggetto.original_title }}</li>
        <li>Lingua: {{ oggetto.original_language }}</li>
        <li>Voto: {{ oggetto.vote_average }}</li>
      </ul>
      <hr>
      <br>-->

    
</template>

<style lang="scss" scoped>
  img{
    width: 100%;
  }
</style>
