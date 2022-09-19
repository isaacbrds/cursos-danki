<template>
  <div id="app">
    <div class="column is-half is-offset-one-quarter">
      <div v-for="(pokemon, index) in pokemons" :key="index">
        <Pokemon :name="pokemon.name" :url="pokemon.url" :num="index"/>
      </div>
    </div>
    
  </div>
</template>

<script>

import axios from 'axios';
import Pokemon from './components/Pokemon.vue'
export default {
  name: 'App',
  data(){
    return{
      pokemons: []
    }
  },
  components: {
    Pokemon
  },
  created: function(){
    axios.get("https://pokeapi.co/api/v2/pokemon?offset=20&limit=20")
         .then(res => { 
           this.pokemons = res.data.results;
           });
         
  }
}
</script>

<style>

</style>
