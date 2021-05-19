
// funcion que guarda los post en firestore, es llamada en template 5
export const savePost = (description) => {
  const db = firebase.firestore();
return db.collection('newPost').doc().set({
  description
  
});
}

// funcion que pinta en wall, los post guardados en firestore, llamada en template 5
export const getPosts = () => {
  const db = firebase.firestore();
  return db.collection('newPost').get()
}
