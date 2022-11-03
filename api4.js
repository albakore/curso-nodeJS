/*
----------------------------------------------------------------
Desafio 4
----------------------------------------------------------------    
Desarrollar un servidor que permita realizar la suma entre 2 numeros
utilizando 3 rutas en estos formatos (Ejemplo con numeros 5 y 6).

    a) Ruta get 'api/sumar/5/6'

    b) Ruta get 'api/sumar/?num1=5&num2=62'

    c) Ruta get 'api/operacion/5+6'

No hace falta validar los datos a sumar, asumimos que los ingresamos correctamente.
El servidor escuchara en el puerto 8080 y mostrara todos los mensajes de conexion / error
que correspondan.
*/

express = require('express');
app = express();
puerto = 8080;

app.get('/api/sumar/', (req, res) => {
    const num1 = Number(req.query.num1);
    const num2 = Number(req.query.num2); 
    res.send(`La suma de las 2 rutas es : ${num1+num2}`)
})

app.get('/api/sumar/:num1/:num2', (req, res) => {
    const num1 = Number(req.params.num1);
    const num2 = Number(req.params.num2); 
    res.send(`La suma de las 2 rutas es : ${num1+num2}`)
})

app.get('/api/operacion/:op', (req, res) => {
    const num1 = req.params.op;
    res.send(`el resultado de la operacion es : ${eval(num1)}`)
})

app.listen(puerto, () => {
    console.log(`Desafio API en puerto:  ${puerto}`)
  })
