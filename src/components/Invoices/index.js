import InvoiceCards from "./InvoiceCards";
import NewInvoice from "./NewInvoice";
import ViewInvoice from "./ViewInvoice";
import { useEffect } from "react";

const Invoices = () => {
    // --- fetch invoices and returns json promise ---
    const extractResponseData = (response) => {
        return response.json();
    };

    const fetchInvoices = async () => {
        const response = await fetch('http://localhost:8080/invoices');
        if (!response.ok) {
            throw new Error();
        }
        return await extractResponseData(response);
    };

    // --- on mount logs the data retrieved ---
    // --- Replace console.log(invoiceData) with setState inside the .then() to display data ---
    useEffect( () => {
        fetchInvoices()
            .then((invoiceData) => {
                console.log(invoiceData);
            })
            .catch((err) => {
                err.message = 'Error! Could not resolve promise.';
                console.log(err.message);
            });
    }, []);

    return (
        <>
            <InvoiceCards />
            <NewInvoice />
            <ViewInvoice />
        </>
    );
}

export default Invoices;