export const wall = () => {
    const divWall = document.createElement('div');
    const viewWall = ` 
    <img src="/img/LOGOAPP.png" alt="">
    
    <form action="">
    <legend>Nuevo Post</legend>
    <textarea id="newPost" cols="30" rows="10"></textarea>

    <button id="sentBtn" class="sentBtn">Subir Post</button>

  </form>

    `
    divWall.innerHTML = viewWall;

    const submitBtn =  divWall.querySelector('#sentBtn');
    submitBtn.addEventListener('click', () => {

        let post = document.querySelector('#newPost').value;
        console.log(post)
    });

    return divWall;
}