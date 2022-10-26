export const changeStatusColour = (status, status_name) => {
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
export const currencyFormatter = (invoice_total) => {
    const options = {
        style: 'currency',
        currency: 'GBP',
    };
    const invoicesTotalFloat = parseFloat(invoice_total);
    const localeString =  invoicesTotalFloat.toLocaleString("en-GB", options);
    return localeString.slice(0,1) + " " + localeString.slice(1);
}
export const dateFormatter = (dateString) => {
    const date = new Date(dateString);
    const options = {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    };
    return (new Intl.DateTimeFormat('en-GB', options).format(date));
}