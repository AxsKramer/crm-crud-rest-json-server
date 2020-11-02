import { getClients, deleteClientById } from './API.js';

(function(){

    const list = document.querySelector('#listado-clientes');
    document.addEventListener('DOMContentLoaded',showClients);
    list.addEventListener('click', deleteClient);

    async function showClients(){
        const clients = await getClients();
        clients.forEach(client => {
            const { name, email, phone, company, id} = client;
            const row = document.createElement('tr');
            row.innerHTML += `
                <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                    <p class="text-sm leading-5 font-medium text-gray-700 text-lg  font-bold"> ${name} </p>
                    <p class="text-sm leading-10 text-gray-700"> ${email} </p>
                </td>
                <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200 ">
                    <p class="text-gray-700">${phone}</p>
                </td>
                <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200  leading-5 text-gray-700">    
                    <p class="text-gray-600">${company}</p>
                </td>
                <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200 text-sm leading-5">
                    <a href="edit-client.html?id=${id}" class="text-teal-600 hover:text-teal-900 mr-5">Edit</a>
                    <a href="#" data-cliente="${id}" class="text-red-600 hover:text-red-900 eliminar">Delete</a>
                </td>
            `;
            list.appendChild(row);
        });
    }

    function deleteClient(event){
        if(event.target.classList.contains('eliminar')){
            const clienId = parseInt(event.target.dataset.cliente);
            const askBeforeDelete = confirm('Are you sure you want to delete this user?');
            if(askBeforeDelete){
                deleteClientById(clienId);
            }
        }

    }

})();