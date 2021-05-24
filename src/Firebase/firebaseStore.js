
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

// se inicializa base de datos firestore
const db = firebase.firestore();

// // funcion que guarda los post en firestore, es llamada en template 5
// export const savePost = (description) => {
// return db.collection('newPost').doc().set({
//   description
  
// });
// }

// // funcion que pinta en wall, los post guardados en firestore, llamada en template 5
// export const getPosts = () => {
//   return db.collection('newPost').get()
// }

  // Mostrar post en tiempo real(onSnapshot)
  export const onGetPost = (callback) => {
     return db.collection('newPost').onSnapshot(callback);
  }

  // Eliminar post
export const deletePost = (id) => {
  return db.collection('newPost').doc(id).delete();
}
 // Actualizar el post con boton edit
 export const updatePost = (id, updatePost) => {
   return db.collection('newPost').doc(id).update(updatePost);
 }