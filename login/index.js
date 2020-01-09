

const boton = window.document.querySelector('#boton')
boton.addEventListener('click', login);



function login() {

 
    const inputMail = window.document.querySelector("#email")
    const emailValue = inputMail.value;
    console.log(emailValue);

    const inputPassword = window.document.querySelector("#password")
    const passwordValue = inputPassword.value;
        

    if (emailValue === 'ejemplo@gmail.com' && passwordValue === '123456') {

        console.log('Iniciando sesión…');
        document.location.assign('../Layout/index.html')

    } else {

        console.log('Email y/o contraseña incorrectos');
    }

}
