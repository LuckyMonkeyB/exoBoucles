let devine ='';
let nbrCorrect = 4;

do{
    devine = parseInt(prompt("Devine un nombre entre 1 et 10 "))
    
    if (devine == nbrCorrect){
        alert("Félicitations, tu as deviné!");
    }else{
        alert("Dommage, c'est raté!")
    }

}while(devine !== nbrCorrect)