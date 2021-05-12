export const home = () => {
    const divhome = document.createElement('div');
    const viewhome = `
    <img src="/img/LOGOAPP.png" alt="">
    <form> 
        <fieldset>

             <legend>Nuevo Post</legend>

                <p>

                    Deja un mensaje:<br>
         
                            <textarea id="newPost" name="mensaje"></textarea>
         
                </p>

        </fieldset>

         <button type="button" id="enviarPost" >Subir Post</button>

    </form>
    `;

    divhome.innerHTML = viewhome;
    // const btnPost = document.querySelector('#enviarPost').addEventListener('click', () => {

    //     const textPost = document.querySelector('#newPost').value;
    //     console.log(textPost);
    // });

    return divhome;
};
