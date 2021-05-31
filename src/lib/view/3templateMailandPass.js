import { createAccount } from '../../Firebase/firebaseAuth.js';
export const mailAndPass = () => {
    const divmailAndPass = document.createElement('div');
    const viewmailAndPass = `
    <section class="container2">
    <img class="logoApp"src="/img/LOGOAPP.png" alt="">
    <div class="div2">
    <form id="signForm" class="signUpForm">
      <p class="penterMail">ENTER YOUR MAIL</p>
      <input type="mail" id="enterMail" class="enterMail" placeholder="quieretupet@gmail.com" required>
      <p id="enterPass" class="enterPass">ENTER YOUR password</p>
      <input type="password" id="password" class="password" placeholder="..........." required>
    </form>
    </div>
    <div class="div3">
    <p class="mustHave">YOUR PASSWORD MUST HAVE</p>
    <ul>
      <li id="characters" class="characters">8 to 20 characters</li>
      <li id="blockMayusLetter" class="blockMayusLetter">Block mayus letter</li>
    </ul>
    <p class="pVerifyYr">
      WE WILL SEND YOU AN EMAIIL TO VERIFY YOUR ACCOUNT PLEASE VERIFY YOUR EMAIL ADDRESSBEFORE LOGGIN IN
    </p>
    <button type="button" id="registerBtn" class="registerBtn">Register</button> 
    </div>
    </section> 
    `
    divmailAndPass.innerHTML = viewmailAndPass
  const register = divmailAndPass.querySelector('#registerBtn');
  register.addEventListener('click', () => {
    createAccount();
  });
    
    return divmailAndPass;
}