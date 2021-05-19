export const signUp = () => {
  const divsignUp = document.createElement('div');
  const viewsignUp = `
  <img class="perroRedondo" src="./img/PERROREDONDO.png" alt="">
  <p class="spa">sign up for an account</p>
  <button id="spaBtnId" class="spaBtnClass">SIGN UP</button>
  
  `
  divsignUp.innerHTML = viewsignUp
  return divsignUp;
 }