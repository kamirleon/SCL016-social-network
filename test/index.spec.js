// importamos la funcion que vamos a testear
import {savePost} from '../src/Firebase/firebaseStore.js';


describe('Primer test de prueba', () => {
  it('debería ser una función', () => {
    expect(typeof savePost).toBe('function');
  });
});

