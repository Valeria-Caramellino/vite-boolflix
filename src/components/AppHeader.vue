<script>
import { store } from '../data/store';
export default {
    nome: 'AppHeader',
    data() {
        return {
            store,
        }
    }
}

</script>

<template>
    <header>
        <div class="container">
            <div class="row">
                <div class="col-12 d-flex justify-content-between">
                    <div class="col-7 d-flex align-items-center">
                        <h1 class="m-2">BOOLFLIX</h1>
                        <div class="mx-1 text-secondary"><span>Home</span> </div>
                        <div class="mx-1 text-secondary"><span>SerieTv</span> </div>
                        <div class="mx-1 text-secondary"><span>Film</span> </div>
                        <div class="mx-1 text-secondary"><span>Originali</span> </div>
                        <div class="mx-1 text-secondary"><span>Aggiunti di recente</span></div>
                        <div class="mx-1 text-secondary"><span>Mia lista</span> </div>
                    </div>
                    <div class="col-4 d-flex align-items-center justify-content-end">
                        <div class="mx-2"><i class="fa-solid fa-magnifying-glass"></i></div>
                        <div class="mx-2 text-secondary"> <span>BAMBINI</span></div>
                        <div class="mx-2"><i class="fa-solid fa-bell"></i></div>
                        <div class="mx-2">
                            <img src="https://i.pinimg.com/originals/34/62/d2/3462d27440aa255b1c314ff16f4032b4.png" alt="">
                        </div>
                    </div>
                </div>
            </div>

        </div>

    </header>
</template>
<style lang="scss" scoped>
header {

    h1 {
        color: red;
        font-weight: 800;
    }

    img {
        height: 50px;

        &:hover {
            cursor: pointer;
            transform: scale(1.1);
        }
    }

    i {
        &:hover {
            cursor: pointer;
            transform: scale(1.1);
        }
    }

    span {
        &:hover {
            color: white;
            cursor: pointer;
        }
    }
}
</style>