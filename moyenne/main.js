let input = +prompt("saisissez vos notes en français, math, géo et histoire (séparez-les par des virgules");
let notes = parseInt(input.split(','));

let somme = 0;

for(let i=0; i<notes.length; i++){
    somme+=notes[i];
}

let moyenne= somme/notes.length;
console.log(moyenne);