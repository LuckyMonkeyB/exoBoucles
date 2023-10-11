let tab = [1, 3, 4, 6, 1, 9, 0, 5, 1, 1];

for(let i=0; i < tab.length; i++){
    if(tab[i]==1){
        tab.splice(i,1);
    
        i--
    }
}
console.log(tab);


// let tab = [1, 3, 4, 6, 1, 9, 0, 5, 1, 1];

// let tabWithout1 = tab.filter(function(number){
//     return number !== 1;
// });
// console.log(tab);
// console.log(tabWithout1);