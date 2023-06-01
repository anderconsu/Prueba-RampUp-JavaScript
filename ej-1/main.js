// Variables a elegir//
let palabra = 'Abecedario'
let seleccionLetra = 'a'

// Funcion para contar las letras en la palabra
const chcount = (palabra, selec) => {
    let counter = 0;
    for (const letra of palabra) 
    {
     if(selec == letra.toLowerCase()){
        counter++
     }
    }
    return counter;
}
// Muestra en consola
console.log(chcount(palabra, seleccionLetra))
