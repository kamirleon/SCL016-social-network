import { startLogIn } from '../../Firebase/firebaseAuth.js';
import { logGoogle } from '../../Firebase/firebaseAuth.js';

export const login = () => {
    const divLogin = document.createElement('div');
    const viewLogin = `
    <img src="/img/LOGOAPP.png" alt="">
    <form id="logIn" class="logIn">
      <p class="penterMail">Login</p>
      <button type="button" id="googleBtn2" class="googleBtn2">Continue with google</button> 
      <p id="checkIn" class="checkIn">Check In</p>
      <input type="mail" id="useMail" class="useMail" placeholder="use your mail">
      <p id="password3" class="password3">password</p>
      <input type="password" id="password2" class="password22" placeholder="...........">
    </form>
    
    <button type="button" id="enterApp" class="enterApp">Enter</button>
    <div id='contenido'>   </div> 
    `

    divLogin.innerHTML = viewLogin;
  const showLogin = divLogin.querySelector('#enterApp');
  showLogin.addEventListener('click', () => {
    startLogIn();
  });

  const logginGoogle2 = divLogin.querySelector('#googleBtn2');
  logginGoogle2.addEventListener('click', () =>{
    logGoogle();
  });

    
    return divLogin;
}