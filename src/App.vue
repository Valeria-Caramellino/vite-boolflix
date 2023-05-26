<script>
import AppMain from './components/AppMain.vue';
import AppHeader from './components/AppHeader.vue';
import  "/node_modules/flag-icons/css/flag-icons.min.css" ;
export default{
  name: "App",
  components:{
    AppHeader,
    AppMain
  }
}

</script>

<template>
  <AppHeader/>
  <AppMain/>
  
</template>

<style lang="scss" scoped>

</style>
