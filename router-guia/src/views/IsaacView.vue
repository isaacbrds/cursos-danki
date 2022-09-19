<template>
    <h3>Formulário</h3>
    <input type="text" v-model="id">
    <input type="text" v-model="nome">
    <button>Enviar</button>
</template>

<script>
export default {
    data(){
        return{
            id: '',
            nome: ''
        }
    },
    created(){
        this.id = this.$route.params.id
        if(this.id){
            this.nome = 'Isaac'
        }
    }
}
</script>