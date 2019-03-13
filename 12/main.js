
let keysPressed = []
const theCode = "san diego";
const successDisplay = document.querySelector(".success")
function secretCode(e){
    keysPressed.push(e.key)
    keysPressed.splice(-theCode.length - 1, keysPressed.length - theCode.length);
    if (keysPressed.join("") == theCode){
        cornify_add();
        successDisplay.textContent = "WOOOOO YOU GOT IT!!!!"
    }
}



window.addEventListener('keypress' , secretCode)