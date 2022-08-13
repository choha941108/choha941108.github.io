const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden"; 
const USERNAME_KEY = "username";

function onLoginSubmit(event){
   event.preventDefault(); 
   
   const username = loginInput.value;
   localStorage.setItem(USERNAME_KEY, username);
   loginForm.classList.add(HIDDEN_CLASSNAME);
   paintGreetings(username);
   console.log(username)
}

function paintGreetings(name){
   greeting.innerText=`Hello ${name}`;
   greeting.classList.remove(HIDDEN_CLASSNAME);

}

//로컬스토리지에 저장된 값 가져오기
const savedUsername = localStorage.getItem(USERNAME_KEY);

if(savedUsername === null){//폼태그에 이름입력해 값 저장하게 하기
   loginForm.classList.remove(HIDDEN_CLASSNAME);
   loginForm.addEventListener("submit", onLoginSubmit);
   console.log('addd!!!');
}else{
   paintGreetings(savedUsername);
}