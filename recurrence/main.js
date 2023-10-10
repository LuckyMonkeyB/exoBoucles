let tab = [0,4,0,4,3,2,9,0,5,8,1,0];

let recurrence = 0;

for(let i=0; i < tab.length; i++){
    if(tab[i]==0){
        recurrence++;
    }
}
console.log(recurrence);