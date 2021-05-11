
export const createAccount = () => {
const email = document.getElementById('enterMail').value;
const password = document.getElementById('password').value; 

firebase.auth().createUserWithEmailAndPassword(email, password)
  .then((userCredential) => {
      console.log("sign up")
   
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    // ..
  });
};
//iniciar sesion con el usuario ya creado.
export const startSignIn = () => {
  const email2 = document.getElementById('useMail').value;
  const password2 = document.getElementById('password2').value;

  firebase.auth().signInWithEmailAndPassword(email2, password2)
    .then(() => {
      // Signed in
      /*  const user = userCredential.user; */
      
      // ...
    })
    .catch((error) => {
   
    });
};

//para ver si el usuario esta logueado
export const viewLogin = () => {
  
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      // User is signed in.
      aparece();
      console.log("existe usuario");
    } else {
      // No user is signed in
      console.log("no existe usuario");
    }
  });
};
viewLogin();


export const aparece = (user) => {
  const contenido = document.getElementById('contenido');
  contenido.innerHTML = "solo lo ve usuario activo";
};