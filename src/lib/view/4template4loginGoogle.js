import { startSignIn } from '../../Firebase/firebaseAuth.js';
export const googleDirect = () => {
    const divgoogleDirect = document.createElement('div');
    const viewgoogleDirect = `
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
    divgoogleDirect.innerHTML = viewgoogleDirect;
  const showSome = divgoogleDirect.querySelector('#enterApp');
  showSome.addEventListener('click', () => {
    startSignIn();
  });
    
    return divgoogleDirect;
}