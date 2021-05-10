// Este es el punto de entrada de tu aplicacion
import { changeRoute } from './router.js';
import { signUp } from './lib/view/1templateSignUp.js';

//SHOW ON SCREEN
// document.getElementById('root').appendChild(signUp());
// document.getElementById ('root').innerHTML += creatProfile () //si no toma hay que poner .appendChild(creatProfile())



//FUNCTION TO INIT OUR APP
const init = () => {
    changeRoute(window.location.hash);
    window.addEventListener('hashchange', () => {
   changeRoute(window.location.hash);
    })
}
window.addEventListener('load', init)


//LOGGIN WITH GOOGLE
//const googleBtn = document.getElementById('googleLoggin')
//googleBtn.addEventListener('click', e =>{
    //console.log(click)
//})
