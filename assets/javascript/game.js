var score = 0;
var chosenNumber = 0;
var wins = 0;
var losses = 0;

var valueCrystal1 = 0;
var valueCrystal2 = 0;
var valueCrystal3 = 0;
var valueCrystal4 = 0;

// on every new game
function newGame (){
    //chose a new random number that player has to match
    chosenNumber = Math.floor(Math.random() * 10 +1);
    
    //give crystal 1 a new value
    valueCrystal1 = Math.floor(Math.random() * 2 +1);
        //assign html element a value
        $("#crystal1").val(valueCrystal1);

    //give crystal 1 a new value
    valueCrystal2 = Math.floor(Math.random() * 2 +1);
        //assign html element a value
        $("#crystal2").val(valueCrystal2);
    
        //give crystal 1 a new value
    valueCrystal3 = Math.floor(Math.random() * 2 +1);
        //assign html element a value
        $("#crystal3").val(valueCrystal3);
    
    //give crystal 1 a new value
    valueCrystal4 = Math.floor(Math.random() * 2 +1);
        //assign html element a value
        $("#crystal4").val(valueCrystal4);
    
    //sett the score to 0
    score = 0;
    
    //show number of wins
    $("#wins").text(wins);
    
    //show number of losses 
    $("#loss").text(losses);
    
    //show chosen number
    $("#chosenNumber").text(chosenNumber);
}

newGame()

// on click event to all .crystal elements on page 
$(".crystal").on("click", function(){
    // take the value of clicked .crystal element and store it in a variable crystalValue
    var crystalValue = $(this).val();
    //take the value of clicked element and make it an integer so that we can + to the score number
    crystalValue = parseInt(crystalValue);
    // add crystalValue to score
   score += crystalValue;
    
   
    //if score equals chosen number
    if( score === chosenNumber ){
        //add 1 to wins
        wins++;
        alert("Bravo you won")
        //start new game 
        newGame(); 
    }
    else if (score > chosenNumber){
        //add one to losses
        losses++;
        alert("you lost");
        //start new game
        newGame();
    }
    
    //show score
    $("#score").text(score);
});





console.log("computers choise " + chosenNumber);
console.log("value crystal #1 " + valueCrystal1);
console.log("value crystal #2 " + valueCrystal2);
console.log("value crystal #3 " + valueCrystal3);
console.log("value crystal #4 " + valueCrystal4);
