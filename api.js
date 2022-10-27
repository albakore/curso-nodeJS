express = require('express');
api = express();

const puerto = 3000;
const laFrase = "Hola mundo como estan"; 


api.get('/', (req,res)=> {
    res.json({"CursoNodeJS":"Desafio realizado por Kevin"});
})

api.get('/api/getFrase', (req,res)=> {
    res.send(laFrase);

})

api.get('/api/getLetra/:num', (req,res)=> {

    const numero = Number(req.params.num);
    
    if(!isNaN(numero) || !numero>laFrase.length){
        res.send(laFrase.charAt(numero));
    }else{
        res.json({"error":"el parametro esta fuera de rango o es incorrecto"});
    }

})

api.get('/api/getPalabra/:num', (req,res)=> {
    const numero = Number(req.params.num);
    const listaPalabras = laFrase.split(" ");

    if(!isNaN(numero) || !numero>listaPalabras.length){
        res.send(listaPalabras[numero]);
    }else{
        res.json({"error":"el parametro esta fuera de rango o es incorrecto"});
    }
    
})

api.listen(puerto, () => {
    console.log(`Desafio API en puerto:  ${puerto}`)
  })


