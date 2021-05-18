
import {getPost, savePost} from '../../Firebase/firebaseStore.js';

export const wall = () => {
    const divWall = document.createElement('div');
    const viewWall = ` 
    <img src="/img/LOGOAPP.png" alt="">

    <form id="formPost">
    <legend>Nuevo Post</legend>
    <textarea id="newPost" cols="30" rows="10"></textarea>


    <button id="sentBtn" class="sentBtn">Subir Post</button>

  </form>


  <div id="postContainer">
  
  
  </div>

    `
    divWall.innerHTML = viewWall;
    const postContainer = divWall.querySelector('#postContainer');
    
    // se inicializa base de datos firestore
    const db = firebase.firestore();
    // se llama a funcion getPost, recorre la data de post y los pinta
        getPost()
      .then((querySnapshot)=>{
        querySnapshot.forEach(doc => {
        console.log(doc.data())
        postContainer.innerHTML += ` <div>
        ${doc.data().description}
        <button>Like</button>
        </div>`
      })
      }) 
      // Guarda los post, resetea formulario
    const submitBtn =  divWall.querySelector('#sentBtn');
    submitBtn.addEventListener('click', async (e) => {
        e.preventDefault();

        let description = document.querySelector('#newPost');
        const form = document.querySelector('#formPost');
        await savePost(description.value);

        form.reset();
        description.focus();

        // console.log(description);

    });

    return divWall;
}

