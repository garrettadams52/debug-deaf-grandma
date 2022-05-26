let continue1 = true
let goodbyes = 0
let userInput = '' 

while (continue1) {

    let  userInput = window.prompt("input please")
    
    if (userInput === "") {
        alert("WHAT!?")
    }
    else if (userInput.toUpperCase() != userInput) {
        alert("SPEAK UP, KID!")
    }
    else if (userInput.toUpperCase() == userInput && userInput != 'GOODBYE!') {
        alert('NO, NOT SINCE 1946!')
    }
    else if (userInput == "GOODBYE!") {
        goodbyes++
        if ( goodbyes == 1 ) {
            alert("LEAVING SO SOON?")
        }
        else if ( goodbyes == 2 ) {
            alert("LATER, SKATER!")
            continue1 = false
        }
    }
}