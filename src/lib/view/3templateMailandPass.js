export const mailAndPass = () => {
    const divmailAndPass = document.createElement('div');
    const viewmailAndPass = `
    <img src="/img/LOGOAPP.png" alt="">
    <form id="signForm" class="signUpForm">
      <p class="penterMail">ENTER YOUR MAIL</p>
      <input type="text" id="enterMail" class="enterMail" placeholder="quieretupet@gmail.com">
      <p id="enterPass" class="enterPass">ENTER YOUR password</p>
      <input type="text" id="password" class="password" placeholder="...........">
    </form>
    <p>YOUR PASSWORD MUST HAVE</p>
    <ul>
      <li id="characters" class="characters">8 to 20 characters</li>
      <li id="blockMayusLetter" class="blockMayusLetter">Block mayus letter</li>
    </ul>
    <p>
      WE WILL SEND YOU AN EMAIIL TO VERIFY YOUR ACCOUNT PLEASE VERIFY YOUR EMAIL ADDRESSBEFORE LOGGIN IN
    </p>
    <button type="text" id="registerBtn" class="registerBtn">Register</button> 
    `
    divmailAndPass.innerHTML = viewmailAndPass
    
    return divmailAndPass;
}