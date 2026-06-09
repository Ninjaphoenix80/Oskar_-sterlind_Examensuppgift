
document.addEventListener("keydown", (Event) =>{
    console.log(Event.code)

    let PressedKey = document.getElementById(Event.code)
    
    PressedKey.style = "background-color: tomato"
})

document.addEventListener("keyup", (Event) =>{
    let PressedKey = document.getElementById(Event.code)
    console.log(event.code)
    PressedKey.style = "background-color: rgb(26, 26, 26)"
})