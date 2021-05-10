export const creatAccount = () => {
const email = document.getElementById('enterMail').value;
const password = document.getElementById('enterPass').value; 

firebase.auth().createUserWithEmailAndPassword(email, password)
  .then((user) => {
      console.log("sign up")
    // Signed in
    var user = userCredential.user;
    // ...
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    // ..
  });
};