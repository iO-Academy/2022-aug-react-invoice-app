import InvoiceCards from "./InvoiceCards";
import NewInvoice from "./NewInvoice";
import ViewInvoice from "./ViewInvoice";

const Invoices = () => {
    return (
        <>
            <ViewInvoice />
            <InvoiceCards />
            <NewInvoice />
        </>
    );
}

export default Invoices;