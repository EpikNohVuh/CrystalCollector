//create variables & setting to zero.
var wins = 0;
var losses = 0;
var targetScore = 0;
var yourScore = 0;
var gemBlue = 0;
var gemPurple = 0;
var gemYellow = 0;
var gemRed = 0;


//Updating HTML score elements.

$("#wins").html(wins);
$("#losses").html(losses);
$("#yourScore").html(yourScore);
$("#targetScore").html(targetScore);


//create functions

var targetScore = Math.floor(Math.random() * 102) + 19; 
    console.log("targetScore: " + targetScore); 
    $("#targetScore").html(targetScore); 
        
var gemBlue = Math.floor(Math.random() * 9) + 1; 
    console.log("gemBlue: " + gemBlue); 

var gemPurple = Math.floor(Math.random() * 10) + 1; 
    console.log("gemPurple: " + gemPurple); 

var gemYellow = Math.floor(Math.random() * 11) + 1; 
    console.log("gemYellow : " + gemYellow ); 

var gemRed = Math.floor(Math.random() * 12) + 1; 
    console.log("gemRed: " + gemRed); 

//Creating a functions that compares targetScore with yourScore, determines loss or win.

function score(){
    if(yourScore === targetScore){
            wins++;
            $("#wins").html(wins);
            alert("You've Won!\nStarting a New Game!")
            reset()
        } else if (yourScore > targetScore) {
            losses++;
            $("#losses").html(losses);
            alert("You've Lost!\nStarting a New Game!")
            reset();
        }}

//Creating a function that resets appropriate score counts, and reconfigures new game gem values.

function reset(){
    targetScore = Math.floor(Math.random() * 102) + 19; 
    console.log("targetScore: " + targetScore); 
    $("#targetScore").html(targetScore); 
        
    gemBlue = Math.floor(Math.random() * 9) + 1; 
        console.log("gemBlue: " + gemBlue); 

    gemPurple = Math.floor(Math.random() * 10) + 1; 
        console.log("gemPurple: " + gemPurple); 

    gemYellow = Math.floor(Math.random() * 11) + 1; 
        console.log("gemYellow : " + gemYellow ); 

    gemRed = Math.floor(Math.random() * 12) + 1; 
        console.log("gemRed: " + gemRed); 

    yourScore = 0;

    $("#yourScore").html(yourScore);
    
}

//Creates .onclick events using jQuery for gems, posts new yourScore HTML values.

$("#gemBlue").click(function() { 
    yourScore = yourScore + gemBlue;
    console.log(yourScore);
    $("#yourScore").html(yourScore);
    score();
}); 

$("#gemPurple").click(function() { 

    yourScore = yourScore + gemPurple;
    console.log(yourScore);
    $("#yourScore").html(yourScore);
    score();

}); 

$("#gemYellow").click(function() { 
    yourScore = yourScore + gemYellow;
    console.log(yourScore);
    $("#yourScore").html(yourScore);
    score();

}); 

 $("#gemRed").on("click",function() { 
    yourScore = yourScore + gemRed;
    console.log(yourScore);
    $("#yourScore").html(yourScore);
    score();

}); 

