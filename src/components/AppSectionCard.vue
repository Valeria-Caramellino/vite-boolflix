<script>
import "/node_modules/flag-icons/css/flag-icons.min.css";
import { store } from '../data/store';
export default {
    name: "AppSectionCard",
    props: {
        oggetto: Object
    },
    data() {
        return {
            store,
            stelline: 5,
        };
    },
    methods: {
        /**metodo per le bandiere */
        getFlag(nazione) {
            return `fi fi-${this.store.ForFlag[nazione]}`
        }

    },
}

</script>

<template>
    <!-----------------------------------film e serie-------------------------->
    <div class="col-3 m-2 position-relative border border-light">
        <!--sezione immagine-->
        <div class="my-card position-absolute d-block">
            <img v-if="oggetto.poster_path" :src="` ${this.store.inizioImmagine}${oggetto.poster_path}`" alt="">
            <img v-else src="https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg" alt="">
        </div>
        <!--sezione testo-->
        <div
            class="my-card position-absolute bg-black d-flex flex-column align-items-center justify-content-center text-center d-none">
            <p>Titolo:</p>
            <small>{{ oggetto.title ? oggetto.title : oggetto.name }}</small>
            <!--<p>Titolo originale: {{ oggetto.original_title }}</p> -->
            <p>Lingua:</p>
            <span :class="getFlag(oggetto.original_language)"></span>
            <div class="d-flex mt-2">
                <p>Voto:</p>
                <!--mini ciclo per stelle-->
                <span v-for="voto in stelline">
                    <template v-if="Math.ceil(oggetto.vote_average / 2) >= voto">
                        <i class="fa-solid fa-star"></i>
                    </template>
                    <template v-else>
                        <i class="fa-regular fa-star"></i>
                    </template>
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