const container  = document.querySelector(".hero");
const text = container.querySelector("h1");

function shadow(e){
    let x = e.offsetX;
    let y = e.offsetY;
    const shadowMax = 300;
    if (e.target != container){
        x += e.target.offsetTop;
        y += e.target.offsetTop;
    }
    xShadow = (x - container.offsetWidth / 2) /(container.offsetWidth /2);
    yShadow = (y - container.offsetHeight / 2) / (container.offsetHeight / 2);
    
    text.style.textShadow = `${xShadow * shadowMax}px ${yShadow * shadowMax}px red`;
}

container.addEventListener('mousemove', shadow);