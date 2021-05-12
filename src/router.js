/* eslint-disable no-use-before-define */
// aqui van los componentes que queremos que se vea, en el caso de fanny puso home, menu, personajes
import { createProfile } from './lib/view/2templateCreateProfile.js';
import { signUp } from './lib/view/1templateSignUp.js';
import { mailAndPass } from './lib/view/3templateMailandPass.js';
import { googleDirect } from './lib/view/4template4loginGoogle.js';
import { home } from './lib/view/6templateHome.js';

export const changeRoute = (hash) => {
  if (hash === '#/') {
    return showTemplate(hash); // en el caso de fanny ella uso hash para menu
  } if (hash === '#/createProfile') {
    return showTemplate(hash);
  } if (hash === '#/loginGoogle') {
    return showTemplate(hash);
  }
  return showTemplate(hash);
};

// CREATE FUNCTION SHOWTEMPLATE

const showTemplate = (hash) => {
  const containerRoot = document.getElementById('root');
  // vamos hacer un switch par acada caso de hash
  switch (hash) {
    case '#/signUp':
      containerRoot.innerHTML = '';
      containerRoot.appendChild(signUp());
      document.getElementById('spaBtnId').addEventListener('click', () => {
        window.location.hash = '#/createProfile';
      });
      break;
    case '#/createProfile':
      containerRoot.innerHTML = '';
      containerRoot.appendChild(createProfile());
      document.getElementById('mailBtn1').addEventListener('click', () => {
        window.location.hash = '#/mailAndPass';
      });
      break;
    case '#/mailAndPass':
      containerRoot.innerHTML = '';
      containerRoot.appendChild(mailAndPass());
      break;
    case '#/loginGoogle':
      containerRoot.innerHTML = '';
      containerRoot.appendChild(googleDirect());
      break;
    case '#/home':
      containerRoot.innerHTML = '';
      containerRoot.appendChild(home());
      break;
    default:
      containerRoot.innerHTML = '<h2>no existe<h2/>';
      break;
  }

  
};
