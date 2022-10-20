/*
1) Escribe una función de flecha llamada saludar(). 
Debe aceptar un único parámetro que represente el nombre de un usuario. 
Debería devolver una cadena de saludo como se muestra a continuación:

	saludar("Ana"); // "Hola Ana"
*/
const saludar = texto => console.log(`Hola ${texto}`)
saludar("Kevin")
/*
2) Convierta la siguiente declaración de función
 de JavaScript en sintaxis de función de flecha.

 function contadorFunc(contador) {
    if ( contador >10){
        contador = 0;

    }else{
        contador++;
    }
    return contador;
 }
*/


const contadorFunc = contador => {
    contador > 10 ? contador=0 : contador++;
    return contador
}

/*
3) Escriba una función de flecha llamada sumarPares 
que acepte un array de números y devuelva la suma de los números pares del array.
nota= Utilice en su declaración un bucle for, este bucle 
lo usamos cuando conocemos con exactitud el numero de veces 
que queremos que se ejecute.

    for (var 1 = 0; 1 < 9; 1++){
        console.log(1);
    }
*/

const sumarPares = numArray => {
    let sumas = 0
    for(var i = 0; i < numArray.length; i++){
        if ((numArray[i] % 2) === 0) {
            sumas+=numArray[i];
            console.log(`Numero Par: ${numArray[i]} - Sumado: ${sumas}`)
        }
        else{
            console.log(`Numero Inpar: ${numArray[i]}`)
        }
    }
}
array = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
sumarPares(array)