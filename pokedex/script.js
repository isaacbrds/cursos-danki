let quantidade = document.getElementById('quantidade');
quantidade.addEventListener('keyup', ()=>{
  pegaPokemons(quantidade.value)
})

function pegaPokemons(quantidade){
  fetch(`https://pokeapi.co/api/v2/pokemon?limit=${quantidade}`)
  .then(response => response.json())
  .then(allpokemon => {
  
    const pokemons = []
    allpokemon.results.map((data)=>{
      
      fetch(data.url)
      .then(response => response.json())
      .then(pokemon => {
        pokemons.push({
          nome: data.name,
          imagem: pokemon.sprites.front_default
        })
  
        if(pokemons.length == quantidade){
          let cards = document.querySelector('.cards');
          cards.innerHTML = "";
          
          pokemons.map(function(val){
            cards.innerHTML += `<div class='box'>
              <img src=${val.imagem} alt='imagem do pokemon'/>
              <p>${val.nome}</p>
            </div>`
  
            console.log(cards);
          })
  
        }
      })    
      
    })
  
    pokemons.map((pokemon)=>{
      console.log(pokemon.nome);
    })
  })
}

pegaPokemons(50)