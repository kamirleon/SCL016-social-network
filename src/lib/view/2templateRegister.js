import { logGoogle } from '../../Firebase/firebaseAuth.js';

export const register = () => {
  const divRegister = document.createElement('div');
  const viewRegister = `
 <section class="container1">
 <div>
 <span class="welcome">WELCOME TO </span>
  <img class="logoApp" src="./img/LOGOAPP.png" alt=""> 
  <span class="creatProfile">CREATE PROFILE</span>
  <button type="text" id="googleBtn1" class="googleBtn1">CONTINUE WITH GOOGLE</button>
  <img class="googleLogo" src="./img/GOOGLE.png" alt="">
  <button type="text" id="mailBtn1" class="mailBtn1">USE YOUR MAIL</buttont>
  </div>
  </section>   
    `
  divRegister.innerHTML = viewRegister
  
  //SE CAPTURA BOTON Y SE LLAMA A FUNCION PARA ACCEDER CON GOOGLE
  const logginGoogle = divRegister.querySelector('#googleBtn1');
  logginGoogle.addEventListener('click', () =>{
    logGoogle();
  });

  return divRegister;
}


