// importamos la funcion que vamos a testear
import MockFirebase from 'mock-cloud-firestore';
global.firebase = new MockFirebase(fixtureData);
import { savePost } from '../src/Firebase/firebaseStore.js';

const fixtureData = {
  __collection__: {
    notes: {
      __doc__: {
        abc123: {
          title: 'terminar la pildora', 
        },
      }
    }
  }
}

global.firebase = new MockFirebase(fixtureData, { isNaiveSnapshotListenerEnabled: true });

describe('savePost', () => {
  it('primer testeo, () => {
    return savePost().then(()=>{
      expect(typeof myFunction).toBe('function');
    })
    
  });
});
