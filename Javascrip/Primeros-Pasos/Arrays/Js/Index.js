// const arrayNumeros = [1, 2, 3, 4, 5]

// |console.log(arrayNumeros[0])

const numeros = [1, 2, 3, 4, 5]  /*por buenas practicas debemos mensionar los arrays en plural y al hacer el llamado en la funcion en singural */
const numerosPares = []  /*creamos un array vacio para guardar los numeros pares*/
const numerosImpares = []  /*creamos un array vacio para guardar los numeros impares*/


numeros.forEach(numero => { 
    const resto = numero % 2  
    if(resto === 0) {                       /*if significa si , y else significa sino*/
        numerosPares.push(numero) 
    } else {
        numerosImpares.push(numero)                    
        }
        
})

console.log('Array de números pares: ', numerosPares)
console.log('Array de números impares: ', numerosImpares)  