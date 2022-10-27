import {useEffect, useState} from "react";
import ClientNameForDropdown from "./ClientNameForDropdown";

const ClientDropDown = () => {
    const [clientsState, setClients] = useState({});

    // --- fetch clients and returns json promise ---
    const extractClientsResponseData = (response) => {
        return response.json();
    }

    const fetchClientData = async () => {
        const response = await fetch('http://localhost:8080/clients');

        if (!response.ok) {
            throw new Error('Data could not be fetched');
        }

        return await extractClientsResponseData(response);
    }

    useEffect(() => {
        fetchClientData()
            .then((clientData) => {
                setClients(clientData);
            })
            .catch((err) => {
                console.log(err.message);
            })
    }, []);

    // the following needs to be added to the modal and to update the client ID in post request
    const handleNameChange = (e) => {
        console.log(e.target.value);
    }

    return (
        <>
            {clientsState.data && <ClientNameForDropdown clientInfo={clientsState.data} handleNameChange={handleNameChange} />}
        </>
    );
}

export default ClientDropDown;