document.addEventListener("keydown", (Event) =>{
    let PressedKey = document.getElementById(Event.code)
    console.log(PressedKey)

    PressedKey.style = "background-color: blue"
})

document.addEventListener("keyup", (Event) =>{
    let PressedKey = document.getElementById(Event.code)
    console.log(PressedKey)
    PressedKey.style = "background-color: black"
})