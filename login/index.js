const boton = window.document.querySelector('#boton')
boton.addEventListener('click', login);
const msgError = document.querySelector('#msg-error');



function login() {

 
    const inputMail = window.document.querySelector("#email")
    const emailValue = inputMail.value;
  

    const inputPassword = window.document.querySelector("#password")
    const passwordValue = inputPassword.value;
        

    if (emailValue === 'ejemplo@gmail.com' && passwordValue === '123456') {

        
        document.location.assign('../Layout/index.html')

    } else {

        console.log('Email y/o contraseña incorrectos');
        msgError.classList.remove('hide');
        msgError.classList.add('visible');
        
    }

}