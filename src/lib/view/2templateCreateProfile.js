import { logGoogle } from '../../Firebase/firebaseAuth.js';

export const createProfile = () => {
  const divCreateProfile = document.createElement('div');
  const viewCreateProfile = `
  <img src="./img/LOGOAPP.png" alt="">
  <p class="creatProfile">Creat a profile</p>
  <button type="text" id="googleBtn1" class="googleBtn1">CONTINUE WITH GOOGLE</button> 
  <button type="text" id="mailBtn1" class="mailBtn1">USE YOUR MAIL</buttont>   
    `
  //SE CAPTURA BOTON Y SE LLAMA A FUNCION PARA ACCEDER CON GOOGLE
  divCreateProfile.innerHTML = viewCreateProfile
  const logginGoogle = divCreateProfile.querySelector('#googleBtn1');
  logginGoogle.addEventListener('click', () =>{
    logGoogle();
  });

  return divCreateProfile;
}


