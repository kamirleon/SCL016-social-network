import {signUp} from '../src/lib/view/1templateSignUp.js';
import { register } from '../src/lib/view/2templateRegister.js';
import { mailAndPass } from '../src/lib/view/3templateMailandPass.js';
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

describe('prueba boton', () => {
  it('deberia ser un boton', () => {
    const btn = mailAndPass();
    
    expect(btn instanceof querySelector('#registerBtn')).toBe(true);
  });
});