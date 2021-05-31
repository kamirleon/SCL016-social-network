import { getPosts, savePost, onGetPost, deletePost, updatePost } from '../../Firebase/firebaseStore.js';

export const wall = () => {
  const divWall = document.createElement('div');
  const viewWall = ` 
<header>
  <div class="container"></div>
  <div class="imgLogo">
  <img src="img/LOGOAPP.png" alt="">
  </div>
</header>
<div class="container">
  
  <form id="formPost" class="">
    <fieldset>
      <div class="form-group">
        <legend>Nuevo Post</legend>
        <textarea name="" id="newPost" class="form-control" cols="30" rows="10"></textarea>
      </div>
      
      <div class="btn-group">
      <label for="boton"></label>
      <button id="sentBtn" class="btn btn-primary">Subir Post</button>
      </div>
    </fieldset>
  </form>
</div>
<div id="postContainer" class="container">
</div>
    `
  divWall.innerHTML = viewWall;
  const postContainer = divWall.querySelector('#postContainer');

  // se inicializa base de datos firestore
  const db = firebase.firestore();
  // estado inicial de boton editar tipo boolean 
  let editStatus = false;
  let id = '';

  // Para crear la primera coleccion 
  const getPost = (id) => db.collection('newPost').doc(id).get();


  // se llama a funcion getPost, recorre la data de post y los pinta
  getPosts()
    .then((querySnapshot) => {
      onGetPost((querySnapshot) => {
        // comienza el contenedor vacio para no se repitan los post
        postContainer.innerHTML = '';
        querySnapshot.forEach((doc) => {
          // informacion de cada post
          const post = doc.data();
          // id unico por cada post que se lo asigna firestore
          post.id = doc.id;
          // template donde se pintan los post
          postContainer.innerHTML += ` 
          <div class="container">
          <br>
          <div class="row">
            <div class="col md-4">
              <ul>
                <li class="list-group-item">
                  <h4> Pet: ${post.user}</h4>
                  <p>${post.description}</p>
                  <button id="btnEdit" class="btn btn-secondary" data-id="${post.id}">Edit</button>
                  <button id="btnDelete" class="btn btn-secondary" data-id="${post.id}">Delete</button>
                </li>
              </ul>
            </div>
          </div>
        </div>
          `
          // se captura btn, traeme todos los btn que tengan este id
          const btnDelete = document.querySelectorAll('#btnDelete');
          btnDelete.forEach(btn => {
            btn.addEventListener('click', async (e) => {
              console.log(e.target.dataset.id) // nos imprime el id de cada post
              confirm('are you sure of delete this post')
              await deletePost(e.target.dataset.id)
            })
          })
          // se captura btn edit, trameme todos los btn con este id
          const btnEdit = document.querySelectorAll('#btnEdit');
          btnEdit.forEach(btn => {
            btn.addEventListener('click', async (e) => {
              console.log('editando')
              const doc = await getPost(e.target.dataset.id);
              console.log(doc.data())
              const post = doc.data();
              // se modifica el editStatus a true para poder editar el post
              editStatus = true;
              id = doc.id;
              // se captura formulario completo por id
              const form = document.querySelector('#formPost');
              // se accede al form, dentro del form hay un id y se accede a ese elemento y se le asigna un valor
              form['newPost'].value = post.description;
              // se cambia nombre del boton subir post a Update
              form['sentBtn'].innerText = 'Update'


            })
          })

        });
      });
    });
  // Guarda los post, resetea formulario
  const submitBtn = divWall.querySelector('#sentBtn');
  submitBtn.addEventListener('click', async (e) => {
    e.preventDefault();
    let description = document.querySelector('#newPost');
    const form = document.querySelector('#formPost');
    if (!description.value) {
      alert('this input cannot empty')
      return
    }
    // si el editStatus es diferente a como se declaro al inicio has esto.. llama a savePost 
    if (!editStatus) {
      await savePost(description.value);
    } else { // sino has esto.. edita el post
      await updatePost(id, {
        description: description.value
      });
      // despues de editar cambia el estado para poster algo nuevo
      editStatus = false;
      id = '';
      // vuelve el nombre del boton edit al original subir post 
      form['sentBtn'].innerText = 'Subir Post';

    }
    // resetea el formulario cada vez que se sube un post 
    form.reset();
    // ubica el cursor en la caja de texto
    description.focus();

    // console.log(description);

  });

  return divWall;
}