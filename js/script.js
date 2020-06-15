var inputEmail = document.querySelector('[type=email]');            // добираемся до поля инпута емейл
var inputPassword = document.querySelector('[type=password]');      // добираемся до поля инпута пароль
var formButton = document.querySelector('[type=submit]');           // добираемся до кнопки
var flag_inputEmail;                                                // флаг емейл
var flag_inputPassword;                                             // флаг пароль
var object_flag = {};                                               // флаг объект

formButton.disabled = true;                                         // кнопка не активна


function func_inputEmail(event) {                                   // функция обрабатывающая инпут емейл
    if(event.target.value.includes('@')) {
        object_flag.email = 1;
    } else {
        object_flag.email = 0;
    }

    if(object_flag.email === 1 && object_flag.password === 1) {
        formButton.disabled = false;
    } else {
        formButton.disabled = true;
    }
}

function func_inputPassword(event) {                                // функция обрабатывающая инпут пароль
    if (event.target.value.length === 0) {
        object_flag.password = 0;
    } else if(event.target.value.length <= 6) {
        object_flag.password = 1;
    } else {
        object_flag.password = 0;
    }

    if(object_flag.email === 1 && object_flag.password === 1) {
        formButton.disabled = false;
    } else {
        formButton.disabled = true;
    }

}

function whatDoButton(event) {
    event.preventDefault();                                             // снимаем базовые события браузера, при нажатии интут теперь небудет перезагрузки страницы
}


inputEmail.addEventListener('input', func_inputEmail);                  // прослушка-шпион на инпут емейл
inputPassword.addEventListener('input', func_inputPassword);            // прослушка-шпион на инпут пароль
formButton.addEventListener('click', whatDoButton);                     // прослушка-шпион на кнопку

