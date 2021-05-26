import { startLogIn } from '../src/Firebase/firebaseAuth.js';
import {signUp} from '../src/lib/view/1templateSignUp.js';
import { register } from '../src/lib/view/2templateRegister.js';


describe('html prueba', () => {
  it('debería ser un hmtl', () => {
    const htmlTemplate1 = signUp();
    expect(htmlTemplate1 instanceof HTMLElement).toBe(true);
  });
  it('deberia ser un html2', () => {
    const htmlTemplate2 = register();
    expect(htmlTemplate2 instanceof HTMLElement).toBe(true);
  });
});

describe('Probar Redireccion', () => {
  it('redireccion de login', () => {
    global.firebase = {
      auth: ()=>{
        return {
          signInWithEmailAndPassword: (email,password) => {
            return Promise.resolve()
          }
        }
      }
    }
    window.location.hash = '#/login'
    startLogIn('camila@SpeechGrammarList.com', '123456')
    .then(()=>{
       expect(window.location.hash).toBe('#/wall')
    });
  });
});