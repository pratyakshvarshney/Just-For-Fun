let body = document.querySelector("body");
let yesb = document.querySelector("#yes");
let nob = document.querySelector("#no");

yesb.onclick = () => {
    alert("Forever yours, love you too💖\nWelcome to my heart");
    body.classList.add("effect");
}

nob.onmouseover = () =>  {
    let temp = parseInt(nob.style.marginTop) || 0;
    nob.style.marginTop = (temp + 100) + "px";
}