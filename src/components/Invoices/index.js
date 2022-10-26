import InvoiceCards from "./InvoiceCards";
import NewInvoice from "./NewInvoice";
import ViewInvoice from "./ViewInvoice";
import {useEffect} from "react";

const Invoices = () => {

    const detailedInvoice = {
        data: {
        id: "",
            invoice_id: "",
            name: "",
            street_address: "",
            city: "",
            created: "",
            due: "",
            invoice_total: "",
            paid_to_date: "",
            status: "",
            status_name: "",
            details: [
                {
                    description: "",
                    quantity: "",
                    rate: "",
                    total: ""
                }
            ]
        }
    }

    const fetchDetailedInvoice = async (invoiceId) => {
        const response = await fetch('http://localhost:8080/invoices/150');

        return await response.json();
    }

    const handleInvoiceCardClick = (event) => {
        fetchDetailedInvoice(event.target.)
            .then((detailedInvoiceData) => {
                console.log(detailedInvoiceData);
            })
    }
    useEffect(() => {
        fetchDetailedInvoice()
            .then((detailedInvoiceData) => {
                console.log(detailedInvoiceData);
            })

    }, [])

    return (
        <>
            <ViewInvoice />
            <InvoiceCards />
            <NewInvoice />
        </>
    );
}

export default Invoices;