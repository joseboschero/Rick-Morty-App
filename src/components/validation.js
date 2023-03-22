export default function Validacion(userData) {
    let errorEmail = {
        vacio: true,
        sintaxis: false,
        longitudEmail: true
    };

    let errorPassword = {
        numero: false,
        longitudPass: false
    };

    let regexMail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    let regexPass= /[0-9]{1,}/;

    // Email validation
    if (userData.email == '') {
        errorEmail.vacio = true;
    } else {
        errorEmail.vacio = false;
    }

    if (userData.email.match(regexMail)) {
        errorEmail.sintaxis = true;
    } else {
        errorEmail.sintaxis = false;
    }

    if (userData.email.length >= 36) {
        errorEmail.longitudEmail = false;
    } else {
        errorEmail.longitudEmail = true;
    }

    // Password validation
    if (userData.password.match(regexPass)) {
        errorPassword.numero = true;
    } else {
        errorPassword.numero = false;
    }

    if (userData.password.length >= 6 && userData.password.length <= 10) {
        errorPassword.longitudPass = true;
    } else {
        errorPassword.longitudPass = false;
    }

    let error = {
        ...errorEmail, ...errorPassword
    }

    return error
}