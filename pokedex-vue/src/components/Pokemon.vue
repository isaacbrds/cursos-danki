<template>

<div class="card column is-offset-one-quarter is-6">
  <div class="card-image column is-offset-one-quarter ">
    <figure>
      <img :src="currentImg" alt="Placeholder image">
    </figure>
  </div>
  <div class="card-content">
    <div class="media">
     <div class="media-content">
        <p class="title column ">{{num}} - {{name}}</p>
        <p class="subtitle column is-offset-one-quarter">{{pokemon.type}}</p>
      </div>
    </div>
    <div class="content">
        <button @click="alternarSprite" class="button is-fullwidth">Alternar</button>
    </div>
  </div>
</div>


</template>

<script>
import axios from 'axios';

export default {
    props: {
        num: Number,
        name: String,
        url: String
    },
    data(){
        return{
            isFront: true,
            currentImg: '',
            pokemon: {
                type: '',
                front: '',
                back: ''
            }
        }
    },
    name: 'PokemonComponente',
    created: function(){
        axios.get(this.url).then(res=>{ 
            this.pokemon.type = res.data.types[0].type.name
            this.pokemon.front = res.data.sprites.front_default
            this.pokemon.back = res.data.sprites.back_default
            this.currentImg = this.pokemon.front;
        })
    },
    methods:{
        alternarSprite(){
            if(this.isFront){
                this.isFront = false;
                this.currentImg = this.pokemon.back;
            }else{
                this.isFront = true;
                this.currentImg = this.pokemon.front;
            }
        }
    }
    
}
</script>