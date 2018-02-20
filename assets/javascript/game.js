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
    //show score
    $("#score").text(score);
    //if score equals chosen number
    if(chosenNumber === score){
        wins++;
        alert("you won")
        newGame()
    }

});


//show number of wins
$("#wins").text(wins);
//show number of losses 
$("#loss").text(losses);
//show chosen number
$("#chosenNumber").text(chosenNumber);


console.log(chosenNumber);
console.log(valueCrystal1);
console.log(valueCrystal2);
console.log(valueCrystal3);
console.log(valueCrystal4);
