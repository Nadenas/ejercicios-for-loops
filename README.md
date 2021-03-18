# ejercicios-for-loops
ejercicios bucles for

1. Escribe un programa que indique si un número es par o impar.
(Pista: Un número es par si al dividirlo entre 2, se obtiene como resto el 0. Si 4 % 2 == 0 es par, sino es impar).
 
2. Escribe un programa que muestre los números del 1 al 50 (pista: haz uso de un bucle for y de condicionales if else), con las siguientes excepciones:
 
Para los múltiplos de 3 muestra la palabra Fizz en lugar del número.
Para los múltiplos de 5 muestra la palabra Buzz en lugar del número.
Para los múltiplos de 3 y 5 muestra la palabra FizzBuzz en lugar del número.
 
3. Crea un bucle anidado (un for dentro de un for). El bucle externo deberá iterar a través del array bobsFollowers, el bucle interno deberá iterar el array tinasFollowers. Si el elemento actual del bucle externo es el mismo que el elemento actual del bucle interno, haz un console.log() del elemento:

var bobsFollowers = ['Alex', 'Arlette', 'My', 'Jr'];
var tinasFollowers = ['Alex', 'Arlette', 'Steve'];
 
4. Dados estos tres arrays:

carnivores = [ 'lion','shark', 'wolve', 'puma', 'snake'];
herbivores = [ 'elephant' , 'giraffe' , 'gacelle' , 'hippo' , 'koala' ];
omnivores = [ 'human' , 'monkey', 'dog' , 'bear' , 'pig' ];

Define una variable llamada animals que referencie a los arrays anteriores: [carnivores, herbivores, omnivores].
 
Crea un bucle FOR que cambie cada string en el array de cada dieta para que sean plurales. Por ejemplo: ['lion',...] -> ['lions',...]
Crea un bucle FOR que verifique en cada uno de los arrays cual es el animal con el nombre mas largo y al final, haz console.log() de un nuevo array de 3 posiciones, cada una con el animal mas largo de cada dieta respectivamente.

(Pista: animals[1][0] será 'elephant').
 
5. Declara una variable con el texto "Bootcamp" y pinta cada letra por consola, luego utiliza un bucle FOR para recorrer el string y traducirlo a lenguaje ballena de la siguente manera:
Las ballenas no utilizan consonantes, por lo tanto no se sumara al mensaje de salida
Las vocales (a,e,i,o,u) prevalecen, es decir, se sumaran al mensaje de salida
la u y la o son dobles, es decir que debes sumarlas 2 veces de manera que el la salida sera algo asi: 

-> bootcamp => ooooa
-> mapamundi => aauui
 
una vez tengas el string traducido a lenguaje ballena, almacénalo en un array. Por ejemplo: aauui => ['a','a','u','u','i']
