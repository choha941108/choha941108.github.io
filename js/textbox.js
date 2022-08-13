const content = "Hello, I'm Choha, front-end developer. \n what is your name?" ;
const text = document.querySelector(".text");
let i = 0;

function typing(){
    if (i < content.length) {
    let txt = content.charAt(i);
    text.innerHTML += txt === "\n" ? "<br/>": txt;
    i++;
    }
}
let interval = setInterval(typing, 100)