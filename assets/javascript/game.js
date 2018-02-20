var score = 0;
var myNumber = 0;
var wins = 1;
var losses = 2;

var valueCrystal1 = 0;
var valueCrystal2 = 0;
var valueCrystal3 = 0;
var valueCrystal4 = 0;

// on every new game
function newGame (){
    //chose a new random number that player has to match
    myNumber = Math.floor(Math.random() * 100 +20);
    //give crystal 1 a new value
    valueCrystal1 = Math.floor(Math.random() * 12 +1);
        //assign html element a value
        $("#crystal1").val(valueCrystal1);
    //give crystal 1 a new value
    valueCrystal2 = Math.floor(Math.random() * 12 +1);
        //assign html element a value
        $("#crystal2").val(valueCrystal2);
    //give crystal 1 a new value
    valueCrystal3 = Math.floor(Math.random() * 12 +1);
        //assign html element a value
        $("#crystal3").val(valueCrystal3);
    //give crystal 1 a new value
    valueCrystal4 = Math.floor(Math.random() * 12 +1);
        //assign html element a value
        $("#crystal4").val(valueCrystal4);
    //sett the score to 0
    score = 0;
   

}

newGame()

//show number of wins
$("#wins").text(wins);
//show number of losses 
$("#loss").text(losses);
//show chosen number
$("#myNumber").text(myNumber);
//show score
$("#score").text(score);



$(".crystal").on("click", function(){
    score += $(this).val();
console.log(score);

});
/*$("#crystal2").on("click", function(){
    alert("crystal2")
});
$("#crystal3").on("click", function(){
    alert("crystal3")
});
$("#crystal4").on("click", function(){
    alert("crystal4")
});*/





console.log(myNumber);
console.log(valueCrystal1);
console.log(valueCrystal2);
console.log(valueCrystal3);
console.log(valueCrystal4);
