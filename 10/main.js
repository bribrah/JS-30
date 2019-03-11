const checkBoxes = Array.from((document.querySelectorAll('input[type=checkbox')));
let lastBox = 0;
let shiftDown = false;
console.log(checkBoxes);


function handleCheck(e){
    thisBox = checkBoxes.indexOf(this);
    if (e.shiftKey){
        if (thisBox > lastBox){
            for (i = lastBox; i <= thisBox; i++){
                checkBoxes[i].checked = checkBoxes[thisBox].checked;
            }
        }
        else{
            for (i = thisBox ; i<= lastBox; i++){
                checkBoxes[i].checked = checkBoxes[thisBox].checked;
            }
        }
    }
    lastBox = thisBox;
}


checkBoxes.forEach(box => box.addEventListener('click' , handleCheck));