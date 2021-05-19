
import {getPosts, savePost} from '../../Firebase/firebaseStore.js';

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
    let editStatus = false;
    let id = '';
     

    const getPost = (id) => db.collection('newPost').doc(id).get();


    const onGetPost = (callback) => db.collection('newPost').onSnapshot(callback);

    const deletePost = id => db.collection('newPost').doc(id).delete();

    const updatePost = (id, updatePost) => db.collection('newPost').doc(id).update(updatePost);
      
    // se llama a funcion getPost, recorre la data de post y los pinta
        getPosts()
      .then((querySnapshot)=>{
        onGetPost((querySnapshot) => {
          // comienza el contenedor vacio para no se repitan los post
        postContainer.innerHTML = '';
        querySnapshot.forEach((doc) => {

        const post = doc.data();
         post.id = doc.id;
         
        postContainer.innerHTML += ` 
        <div>
        <div>
        <h3>${post.description}</h3>
        </div>
        <button>Like</button>
        <button id="btnEdit" class="btnEdit" data-id="${post.id}">Edit</button>
        <button id="btnDelete" class="btnDelete" data-id="${post.id}">Delete</button>


        </div>`

        const btnDelete = document.querySelectorAll('.btnDelete');
        btnDelete.forEach(btn => {
          btn.addEventListener('click', async (e) =>{
            console.log(e.target.dataset.id)
            await deletePost(e.target.dataset.id)
          })
        })

        const btnEdit = document.querySelectorAll('.btnEdit');
        btnEdit.forEach(btn => {
          btn.addEventListener('click', async (e) =>{
            console.log('editando')
            const doc = await getPost(e.target.dataset.id);
            console.log(doc.data())
            const post = doc.data();

            editStatus = true;
            id = doc.id;

            const form = document.querySelector('#formPost');
            form['newPost'].value = post.description;
            form['sentBtn'].innerText = 'Update'


          })
        })

      });
      });
      });
      // Guarda los post, resetea formulario
    const submitBtn =  divWall.querySelector('#sentBtn');
    submitBtn.addEventListener('click', async (e) => {
        e.preventDefault();

        let description = document.querySelector('#newPost');
        const form = document.querySelector('#formPost');

        if(!editStatus){
          await savePost(description.value);
        } else{
          await updatePost(id, {
            description: description.value
          })

        }

        form.reset();
        description.focus();

        // console.log(description);

    });

    return divWall;
}

