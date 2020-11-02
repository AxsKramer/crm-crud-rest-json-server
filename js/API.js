const url = 'http://localhost:4000/clientes';

export  const createNewClient = async client => {
    try{
        await fetch(url, {
            method: 'POST',
            body: JSON.stringify(client),
            headers:{'Content-type': 'application/json'}
        });
        window.location.href = 'index.html';
    }
    catch(error){
        console.log(error);
    }
}

export const getClients = async () => {
    try{
        const response = await fetch(url);
        const clients = await response.json();
        return clients;
    }catch(error){
        console.log(error)
    }
}

export const deleteClientById = async clientId =>{
    try{
        await fetch(`${url}/${clientId}`,{
            method: 'DELETE'
        });
    }catch(error){
        console.log(error)
    }
}

export const getClientById = async id =>{
    try{
        const response = await fetch(`${url}/${id}`);
        const client = await response.json();
        return client;
    }catch(error){
        console.log(error)
    }
}

export const updateClient = async client => {
    try{
        await fetch(`${url}/${client.id}`, {
            method: 'PUT',
            body: JSON.stringify(client),
            headers:{'Content-Type': 'application/json'}
        });
        window.location.href = 'index.html';
    }catch(error){
    }
}