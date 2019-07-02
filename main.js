alert("Hello! are you ready to play? Let's Guess Your Personality.")

var play = confirm("Do you want to play?")

if (play) {
    alert("Great! Let's get started!")

    var name = prompt("What is your name?")
    alert("Hello " + name + "!")

    
} else {
    alert("Ok! Game over.")
}

/*
 alert() // doesn't return anything
 prompt() // returns whatever they type
 confirm() // return true or false
*/