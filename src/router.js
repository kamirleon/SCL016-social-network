/* eslint-disable no-use-before-define */
// aqui van los componentes que queremos que se vea, en el caso de fanny puso home, menu, personajes
import { register } from './lib/view/2templateRegister.js';
import { signUp } from './lib/view/1templateSignUp.js';
import { mailAndPass } from './lib/view/3templateMailandPass.js';
import { login } from './lib/view/4template4login.js';
import { wall } from './lib/view/5templateWall.js';

export const changeRoute = (hash) => {
  if (hash === '#/') {
    return showTemplate(hash); // en el caso de fanny ella uso hash para menu
  } if (hash === '#/register') {
    return showTemplate(hash);
  } if (hash === '#/login') {
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
        window.location.hash = '#/register';
      });
      break;
    case '#/register':
      containerRoot.innerHTML = '';
      containerRoot.appendChild(register());
      document.getElementById('mailBtn1').addEventListener('click', () => {
        window.location.hash = '#/mailAndPass';
      });
      break;
    case '#/mailAndPass':
      containerRoot.innerHTML = '';
      containerRoot.appendChild(mailAndPass());
      break;
    case '#/login':
      containerRoot.innerHTML = '';
      containerRoot.appendChild(login());
      break;
    case '#/wall':
      containerRoot.innerHTML = '';
      containerRoot.appendChild(wall());
      break;
      case '#/signUp':
      containerRoot.innerHTML = '';
      containerRoot.appendChild(signUp());
      break;
    default:
      containerRoot.innerHTML = '<h2>no existe<h2/>';
      break;
  }

  
};
