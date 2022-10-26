const InvoiceCards = ({invoice}) => {
    const { due, id, invoice_id, name, invoice_total, status, status_name } = invoice;

    const changeStatusColour = (status) => {
        const statusMap = {
            "1": "ps-4 btn btn-outline-success m-0 disabled opacity-100",
            "2": "ps-4 btn btn-outline-warning m-0 disabled opacity-100",
            "3": "ps-4 btn btn-outline-danger m-0 disabled opacity-100"
        };
        return (
            <ul className={statusMap[status]}>
                <li><strong>{status_name}</strong></li>
            </ul>
        )
    }

    const options = {
        style: 'currency',
        currency: 'GBP',
    }
    const invoicesTotalFloat = parseFloat(invoice_total);
    const invoicesTotalFormatted = invoicesTotalFloat.toLocaleString("en-GB", options);

    const dateFormatter = (dateString) => {
        const date = new Date(dateString);
        const options = {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
        };
        return (new Intl.DateTimeFormat('en-GB', options).format(date));
    }

    return (
        <>
            <div className="bg-white d-flex flex-wrap mb-2 justify-content-between align-items-center p-3 bd-highlight border rounded" key={id}>
                    <div className="pe-4">#<strong>{invoice_id}</strong></div>
                    <div className="px-4 text-muted">Due {dateFormatter(due)}</div>
                    <div className="ps-4 text-muted">{name}</div>
                    <div className="fs-4 mb-0 w-50 ps-md-4"><strong>{invoicesTotalFormatted}</strong></div>
                    {changeStatusColour(status)}
                <div className="p-0 d-none d-xl-block">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                         className="bi bi-chevron-right" viewBox="0 0 16 16">
                        <path fill-rule="evenodd"
                              d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
                    </svg>
                </div>
            </div>
        </>
    );
}

export default InvoiceCards;