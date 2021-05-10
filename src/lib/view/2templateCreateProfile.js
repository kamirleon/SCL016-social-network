export const createProfile = () => {
  const divCreateProfile = document.createElement('div');
  const viewCreateProfile = `
  <img src="./img/LOGOAPP.png" alt="">
  <p class="creatProfile">Creat a profile</p>
  <button type="text" id="googleBtn1" class="googleBtn1">CONTINUE WITH GOOGLE</button> 
  <button type="text" id="mailBtn1" class="mailBtn1">USE YOUR MAIL</buttont>   
    `
  divCreateProfile.innerHTML = viewCreateProfile
  return divCreateProfile;
}


