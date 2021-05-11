
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
export const startSignIn = (email2, password2) => {
  console.log('entreeee')
  firebase.auth().signInWithEmailAndPassword(email2, password2)
    .then(() => {
      // redirigir al home
      window.location.hash = '#/home'
     // showmsn();
      // Signed in
      /*  const user = userCredential.user; */
      
      // ...
    })
    .catch((error) => {
   
    });
};

//para ver si el usuario esta logueado
// export const viewLogin = () => {
  
//   firebase.auth().onAuthStateChanged((user) => {
//     if (user) {
//       // User is signed in.
//       aparece();
//       console.log("existe usuario");
//     } else {
//       // No user is signed in
//       console.log("no existe usuario");
//     }
//   });
// };
// viewLogin();


export const aparece = (user) => {
  const contenido = document.getElementById('contenido');
  contenido.innerHTML = "solo lo ve usuario activo";
};


// funcion para acceder con google 
export const logGoogle = ()=> {
const provider = new firebase.auth.GoogleAuthProvider();
firebase.auth()
  .signInWithPopup(provider)
  .then((result) => {
    /** @type {firebase.auth.OAuthCredential} */
    var credential = result.credential;

    // This gives you a Google Access Token. You can use it to access the Google API.
    var token = credential.accessToken;
    // The signed-in user info.
    var user = result.user;
    // ...
  }).catch((error) => {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // The email of the user's account used.
    var email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    var credential = error.credential;
    // ...
  });

}






