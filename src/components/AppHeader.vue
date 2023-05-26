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
                <div class="col-12 ">
                    <h1 class="m-2">Netflix</h1>
                </div>
            </div>

        </div>

    </header>
</template>
<style lang="scss" scoped>
h1 {
    color: red;
}
</style>