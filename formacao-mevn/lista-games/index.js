const { response } = require('express');
const express = require('express');

const app = express();
app.use(express.json())

let games  = [
    {
        title: 'Supermario',
        studio: "Nitendo"
    },
    {
        title: 'Wow',
        studio: 'Blizzard'
    }

];

app.get('/', (req,res)=>{
    res.json(games)
})

app.post('/', (req,res) => {
    const { title, studio } = req.body;
    games.push({title, studio})
    res.json(games)
})

app.listen(3000, ()=>{
    console.log('Servidor no ar!!')
})