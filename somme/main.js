let nbr = +prompt("saisissez un nombre");
let chiffres = nbr.split('').map(Number);
let somme = 0;

for(let i=0; i <chiffres.length; i++){
    somme+=chiffres
}
 console.log(somme);