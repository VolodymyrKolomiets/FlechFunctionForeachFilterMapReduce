//Funciones flecha

//Convierte la siguiente función en una función flecha:
function saludar() {
  return "Hola";
}

const salud = () => 'Hola'
console.log(salud())

//Convierte la siguiente función en una función flecha en línea:
function division(a,b) {
  return a / b;
}

const div = (a,b) => a/b
console.log(div(6,2))

//Convierte la siguiente función en una función flecha:
function miNombre(nombre) {
  return `Mi nombre es ${nombre}`;
}

const nomb = (nombre) => `Mi nombre es ${nombre}`
console.log(nomb('Vlad'))

//Convierte las siguientes funciones en funciones flecha:
function test2() {
  console.log("Función test 2 ejecutada.");
}
function test1(callback) {
  callback();
}	

const test = (test2) => test2()

test(test2)


//FOREACH

//Utiliza la siguiente array para resolver los próximos ejercicios: 
      
let gente = [
        {
          nombre: "Jamiro",
          edad: 45,
        },
        {
          nombre: "Juan",
          edad: 35,
        },
        {
          nombre: "Paco",
          edad: 34,
        },
        {
          nombre: "Pepe",
          edad: 14,
        },
        {
          nombre: "Pilar",
          edad: 24,
        },
        {
          nombre: "Laura",
          edad: 24,
        },
        {
          nombre: "Jenny",
          edad: 10,
        },
      ];
    
//Crea un array con la gente mayor de 25 años y muéstralo por consola.

gente.forEach(peepol => {
    if (peepol.edad > 25 ){
    const gent = peepol 
    console.log(gent)
    }
})


//Crea un array con la gente que empieza por J.

gente.forEach(namP => {
    if (namP.nombre[0] == 'J') {
        const gentJ = namP
        console.log(gentJ)
    }
})
      

//MAP

//Utilizando el array de antes crea un array con la gente mayor de 25 años y muéstralo por consola.

const genteM = gente.map(genM  => {
 if (genM.edad > 25) {
 return genM
 }
})
console.log(genteM)

//Crea un array con la gente que empieza por J. 

const gentJ = gente.map( firstJ => {
    if ( firstJ.nombre[0] == 'J') {
        return firstJ
    }
})

console.log(gentJ)
//Dado el siguiente array, crear otro que sea el resultado de elevar cada número a si mismo:

const number = [ 4, 5, 6, 7, 8, 9, 10];
const double = number.map( num => num ** num)

console.log(double)
// Resultado esperado
// [256, 3125, 46656, 823543, 16777216, 387420489, 10000000000]


//FILTER

//Crea un segundo array que devuelva los impares
 const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

 const impar = numbers.filter(num => num / 2 !==0)
 console.log(impar)

// Dado el siguiente array, genera un segundo array que filtre los platos veganos y saque una sentencia como la del ejemplo:
 const foodList = [
        {
          name: 'Tempeh',
          isVeggie: true
        },
        {
          name: 'Cheesbacon burguer',
          isVeggie: false
        },
        {
          name: 'Tofu burguer',
          isVeggie: true
        },
        {
          name: 'Entrecot',
          isVeggie: false
        }
      ];
      /* [
          'Que rico Tempeh me voy a comer!',
          'Que rica Tofu burguer me voy a comer!'
         ]
      */
const vegan = foodList.filter( veg => veg.isVeggie == true).map(wfr => `Que rico ${wfr.name}  me voy a comer!`)

console.log(vegan)


//REDUCE

//Dado el siguiente array, obtén la multiplicación de todos los elementos del array:

const numeros = [39, 2, 4, 25, 62];

const multTwo = numeros.reduce((a,b) => a*b )

console.log(multTwo)

// Salida--> 483600
