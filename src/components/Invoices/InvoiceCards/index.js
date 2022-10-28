import {changeStatusColour, dateFormatter, currencyFormatter} from "../../../helpers/utils";

const InvoiceCards = (props) => {
    const { due, id, invoice_id, name, invoice_total, status, status_name } = props.invoice;
    const handleCardClick = props.handleCardClick;

    return (
        <>
            <div onClick={(event) => {
                handleCardClick(event.target.getAttribute('data-id'));
            }}
                 data-bs-toggle="modal" data-bs-target="#viewInvoiceModal"
                 className="bg-white d-flex flex-wrap mb-2 justify-content-between align-items-center p-3 bd-highlight border rounded"
                 key={id} data-id={id}>
                <div className="pe-4" data-id={id}>#<strong data-id={id}>{invoice_id}</strong></div>
                <div className="px-4 text-muted" data-id={id}>Due {dateFormatter(due)}</div>
                <div className="ps-4 text-muted" data-id={id}>{name}</div>
                <div className="fs-4 mb-0 w-50 ps-md-4" data-id={id}><strong data-id={id}>{currencyFormatter(invoice_total)}</strong></div>
                {changeStatusColour(status, status_name)}
                <div className="p-0 d-none d-xl-block" data-id={id}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                         className="bi bi-chevron-right" viewBox="0 0 16 16" data-id={id}>
                        <path fillRule="evenodd"
                              d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
                    </svg>
                </div>
            </div>
        </>
    );
}

export default InvoiceCards;