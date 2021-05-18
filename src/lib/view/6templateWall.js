const db = firebase.firestore();

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
    const postContainer = document.querySelector('#postContainer');


    const savePost = (description) => 
    db.collection('newPost').doc().set({
      description
    });

    const getPost = () => db.collection('newPost').get();

    window.addEventListener('DOMContentLoaded', async (e) => { 
      const querySnapshot = await getPost();
      querySnapshot.forEach(doc => {
        console.log(doc.data())
        postContainer.innerHTML += ` <div>
        ${doc.data().description}
        </div>`
        
      })
    })

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
