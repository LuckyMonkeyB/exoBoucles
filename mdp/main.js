const mdp = "Hello";
let devine = '';

do{
    devine = prompt("devine le mdp")

    if(devine==mdp){
        console.log("bon mdp");
    }else{
        console.log("mdp erroné");
    }

} while(devine!=mdp)