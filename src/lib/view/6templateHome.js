export const home = () => {
    const divhome = document.createElement('div');
    const viewhome = `
    <img src="/img/LOGOAPP.png" alt="">
    <form id="formPost" class="formPost"> 
        <fieldset>

             <legend>Nuevo Post</legend>

                <p id="descriptionForm" class"descriptionForm">

                    Deja un mensaje:<br>
         
                            <textarea id="newPost" name="mensaje"></textarea>
         
                </p>

        </fieldset>

         <button type="button" id="enviarPost">upload</button>

    </form>
    `;

    divhome.innerHTML = viewhome;
 const btnPost = divhome.querySelector('#enviarPost').addEventListener('click', () => {

       const textPost = document.querySelector('#newPost').value;
         console.log(textPost);
     });

    return divhome;
};
