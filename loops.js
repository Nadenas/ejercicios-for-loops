//Ejercicio 1 par o impar
var num = 5;
if ((num % 2) === 0){
  console.log('Es un número par.');
  }
  else{
    console.log('Es un número impar');
  }

// Ejercicio 2 multiplo de 3 y 5 

for(let i = 1; i < 51; i++){
  if ((i % 3) == 0 && !(i % 5) == 0){
  console.log('Fizz');
  }
  else if ((i % 5) == 0 && !(i % 3) == 0){
    console.log('Buzz');
  }
  else if ((i % 3) == 0 && (i % 5) == 0){
    console.log('FizzBuzz');
  }
  else{
    console.log(i);
  }
  }
  
  //Ejercicio 3 bucle anidado
  
var bobsFollowers = ['Alex', 'Arlette', 'My', 'Jr'];
var tinasFollowers = ['Alex', 'Arlette', 'Steve'];

for(let i = 0; i < bobsFollowers.length; i++){
  for(let j = 0; j < tinasFollowers.length; j++){
    if(bobsFollowers[i] == tinasFollowers[j]){
      console.log(bobsFollowers[i]);
    }
  }
}

//Ejercicio 4 arca de Noel
var carnivores = [ 'lion','shark', 'wolve', 'puma', 'snake'];
var herbivores = [ 'elephant' , 'giraffe' , 'gacelle' , 'hippo' , 'koala' ];
var omnivores = [ 'human' , 'monkey', 'dog' , 'bear' , 'pig' ];
var animals = [carnivores, herbivores, omnivores];
var longestCarnivores = "";
var longestHerbivores = "";
var longestOmnivores = "";
for(var i = 0; i < animals.length; i++){
  for(var j = 0; j < animals[i].length; j++){
    console.log(animals[i][j] + 's');
      if(animals[0][j].length > longestCarnivores.length){
       longestCarnivores = animals[0][j];
      }
      if(animals[1][j].length > longestHerbivores.length){
       longestHerbivores = animals[1][j];
      }
      if(animals[2][j].length > longestOmnivores.length){
       longestOmnivores = animals[2][j];
      }
  }
}
console.log(longestCarnivores, longestHerbivores, longestOmnivores);

  //ejercicio 5 "bootcamp"
  
  var bc = "bootcamp";
  var ballena = '';
  for(let i = 0; i < bc.length; i++){
    if(bc[i] == 'a' || bc[i] == 'e' || bc[i] == 'i'){
      ballena += bc[i];
    }
    else if (bc[i] == 'o' || bc[i] == 'u'){
      ballena += bc[i] + bc[i];
    }
  
  }
  console.log(ballena);
  
