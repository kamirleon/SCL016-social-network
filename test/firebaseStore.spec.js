import MockFirebase from 'mock-cloud-firestore';

const fixtureData = {
  __collection__: {
    notes: {
      __doc__: {
        abc123: {
          title: 'terminar la pildora',
        },
        abc125: {
          title: 'Comprar trufas',
        },
      }
    }
  }
}

global.firebase = MockFirebase(fixtureData, { isNaiveSnapshotListenerEnabled: true});

import { savePost } from '../src/Firebase/firebaseStore.js';

describe('Primer test de prueba', () => {
  it('debería ser una función', () => {
    return savePost('comprar pan').then((data)=>{
      console.log(data)
    expect(data).toBe('la nota fue agregada');
    })
  });
});