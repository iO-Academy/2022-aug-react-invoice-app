import InvoiceCards from "./InvoiceCards";
import NewInvoice from "./NewInvoice";
import ViewInvoice from "./ViewInvoice";
import {useEffect, useState} from "react";

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
                },
            ]
        }
    }

    const initialDetailsState = [];

    const [detailedInvoiceState, setDetailedInvoiceState] = useState(detailedInvoice);
    const [detailsState, setDetailsState] = useState(initialDetailsState);

    const fetchDetailedInvoice = async (invoiceId) => {
        const response = await fetch(`http://localhost:8080/invoices/${invoiceId}`);

        return await response.json();
    }

    const handleCardClick = () => {
        fetchDetailedInvoice(150)
            .then((detailedInvoiceData) => {
                setDetailedInvoiceState(detailedInvoiceData.data);
                setDetailsState(detailedInvoiceData.data.details);
            })
    }

    return (
        <>
            <ViewInvoice handleCardClick={handleCardClick} detailedInvoiceState={detailedInvoiceState}
                         detailsState={detailsState}/>
            <InvoiceCards />
            <NewInvoice />
        </>
    );
}

export default Invoices;