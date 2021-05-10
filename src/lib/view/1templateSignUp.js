export const signUp = () => {
  const divsignUp = document.createElement('div');
  const viewsignUp = `
  <img src="./img/PERROINCOGNITO.jpeg" alt="">
  <p class="spa">sign up for an account</p>
  <button id="spaBtnId" class="spaBtnClass">SIGN UP</button>
  
  `
  divsignUp.innerHTML = viewsignUp
  return divsignUp;
 }