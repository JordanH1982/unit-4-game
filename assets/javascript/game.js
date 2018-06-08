$(document).ready(function(){
    
    var targetNumber = Math.floor(Math.random() * 100);

    $("#number-to-guess").text(targetNumber);
    
    var counter = 0;

    var wins = 0;

    var losses = 0;

    var numberOptions = [10, 5, 3, 7];
    
    for (var i = 0; i < numberOptions.length; i++) {

        var bobaImage = $("<img>");

        bobaImage.addClass("boba-image");

        bobaImage.attr("src", "assets/images/boba.png");

        bobaImage.attr("data-bobavalue", numberOptions[i]);

        $("#bobas").append(bobaImage);
    }

    //var increment = numberOptions[Math.round(Math.random())];

    $(".boba-image").on("click", function() {

        var bobaValue = ($(this).attr("data-bobavalue"));

        bobaValue = parseInt(bobaValue);
        
        counter += bobaValue;
       
        alert("Your new score is " + counter);

        if(counter === targetNumber) {

            alert("You Win!");

            wins++;

            $("#wins").text(wins);

            reset;

            }

        else if (counter >= targetNumber) {

            alert("You Lose!");

            losses++;

            $("#losses").text(losses);

            reset;

        }

        /* I got most everything figured out except for resetting the game without refreshing. I had a reset function that
        reset game values but I couldn't get it to "call" for some reason. */


        
        

    });



});



