import {validateForm, showAlert} from './functions.js';
import {createNewClient} from './API.js';

const form = document.querySelector('#formulario');
form.addEventListener('submit', validateClient);

function validateClient(event){
    event.preventDefault();
    const name = document.querySelector('#nombre').value;
    const email = document.querySelector('#email').value;
    const phone = document.querySelector('#telefono').value;
    const company = document .querySelector('#empresa').value;

    const client = {name, email, phone, company};

    if(validateForm(client)){
        showAlert('All fields are required');
        return;
    }
    else{
        createNewClient(client);
    }
}


