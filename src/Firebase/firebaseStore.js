var db = firebase.firestore();

db.collection("users").add({
    first: "Ada",
    last: "Lovelace",
    born: 1815
})
.then((docRef) => {
    console.log("Document written with ID: ", docRef.id);
})
.catch((error) => {
    console.error("Error adding document: ", error);
});

// const formPost = document.getElementById('descriptionForm');
// formPost.addEventListener('click', e => {
//     e.preventDefault();

// })

// const description = formPost.['descriptionForm'].value;