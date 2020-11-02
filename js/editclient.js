import { getClientById, updateClient } from './API.js';
import { showAlert, validateForm } from './functions.js';

(function() {
    const nameInput = document.querySelector('#nombre');
    const emailInput = document.querySelector('#email');
    const companyInput = document.querySelector('#empresa');
    const phoneInput = document.querySelector('#telefono');
    const idInput = document.querySelector('#id');

    document.addEventListener('DOMContentLoaded', getParamsFromUrl);

    async function getParamsFromUrl(){
        const paramsURL = new URLSearchParams(window.location.search);
        const clientId = parseInt( paramsURL.get('id') );
        const client = await getClientById(clientId);
        showClient(client);
        const form = document.querySelector('#formulario');
        form.addEventListener('submit', validateClient);
    }

    function showClient(client) {
        const { name, company, email, phone, id } = client;
        nameInput.value = name;
        companyInput.value = company;
        emailInput.value = email;
        phoneInput.value = phone;
        idInput.value = id;
    }

    function validateClient(event) {
        event.preventDefault();
        const client = {
            name: nameInput.value,
            email: emailInput.value,
            phone: phoneInput.value,
            company: companyInput.value, 
            id: parseInt(idInput.value)
        }
        if( validateForm(client)) {
            showAlert('All fiels are required');
            return;
        }
        updateClient(client);
    }
})();