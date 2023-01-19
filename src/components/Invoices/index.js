import InvoiceCards from "./InvoiceCards";
import NewInvoice from "./NewInvoice";
import ViewInvoice from "./ViewInvoice";
import {useCallback, useEffect, useState} from "react";

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

    const [selectedClient, setSelectedClient] = useState(-1);
    const [total, setTotal] = useState(0);
    const [details, setDetails] = useState(
        [{description: '', qty: 0, rate: 0, total: 0}]
    );
    const [detailedInvoiceState, setDetailedInvoiceState] = useState(detailedInvoice);
    const [detailsState, setDetailsState] = useState([]);

    const fetchDetailedInvoice = async (invoiceId) => {
        const response = await fetch(`http://localhost:8080/invoices/${invoiceId}`);

        return await response.json();
    }

    const handleCardClick = (id) => {
        fetchDetailedInvoice(id)
            .then((detailedInvoiceData) => {
                setDetailedInvoiceState(detailedInvoiceData.data);
                setDetailsState(detailedInvoiceData.data.details);
            })
    }

    const [invoices, setInvoices] = useState([]);
    // --- fetch invoices and returns json promise ---
    const extractResponseData = (response) => {
        return response.json();
    }

    const fetchInvoices = async () => {
        const response = await fetch('http://localhost:8080/invoices');
        if (!response.ok) {
            throw new Error();
        }
        return await extractResponseData(response);
    }

    const updateInvoices = useCallback(() => {

        fetchInvoices()
            .then((invoiceData) => {
                setInvoices(invoiceData.data);
            })
            .catch((err) => {
                err.message = 'Error! Could not resolve promise.';
            });

    }, [invoices]);

    // --- on mount logs the data retrieved ---
    useEffect( () => {
        updateInvoices()
    }, []);

    // --- filter invoices ---
    const filterInvoices = (status) => {
        return invoice => invoice.status === status
    };

    const unpaidInvoicesCount = invoices.filter(invoice => invoice.status === "2").length;

    // --- Send POST request to invoices database and returns json promise ---
    const postNewInvoice = async (data) => {
        const response = await fetch('http://localhost:8080/invoices',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
        if (!response.ok) {
            throw new Error();
        }
        updateInvoices();
        return await extractResponseData(response);
    }

    // --- handles newInvoice submission ---
    const handleSubmit = () => {
        postNewInvoice({
            "client": parseInt(selectedClient),
            "total": total,
            "details":
                details.map((row) => {
                    return (

                        {
                            "quantity": Number(row.qty),
                            "rate": Number(row.rate),
                            "total": row.total,
                            "description": row.description
                        }
                    )
                })

        })
            .then((res) => {
                // --- data to update invoices State ---
                const newInvoiceDetails = {
                    id: res.data.id,
                    invoice_id: res.data.invoice_id,
                    name: "Holly-anne Crothers",
                    due: "2021-12-30",
                    invoice_total: "4485.93",
                    status: "1",
                    status_name: "Paid"
                }
                setInvoices((prevInvoiceState) => {
                    return [...prevInvoiceState, newInvoiceDetails];
                })
            })
            .catch((err) => {
                err.message = 'Error! Could not post this new invoice.';
            });
    }

    const [filteredInvoiceState, setFilteredInvoiceState] = useState(invoices);


    const sortByReference = [...filteredInvoiceState].sort((a, b) => a.invoice_id - b.invoice_id);
    const sortByTotal = [...filteredInvoiceState].sort((a, b) => b.invoice_total - a.invoice_total);
    const sortByDate = [...filteredInvoiceState].sort((a,b) => a.due - b.due);

    const [sortState, setSortState] = useState(invoices);

    useEffect(() => {
        setFilteredInvoiceState(invoices)
    }, [invoices])

    useEffect(() => {
        console.log(filteredInvoiceState)
        setSortState(filteredInvoiceState)
    }, [invoices, filteredInvoiceState])

    return (
        <>
            <ViewInvoice detailedInvoiceState={detailedInvoiceState} detailsState={detailsState}/>
            <NewInvoice
                selectedClient={selectedClient}
                setSelectedClient={setSelectedClient}
                total={total}
                setTotal={setTotal}
                details={details}
                setDetails={setDetails}
                handleSubmit={handleSubmit}
            />
            <div className="py-5 px-3">
                <header className="d-flex justify-content-between align-items-end flex-wrap pt-3 px-0">
                    <div>
                        <h1 className="fw-bolder">Invoices</h1>
                        <p>There are {unpaidInvoicesCount} unpaid invoices</p>
                    </div>
                    <div className="d-flex justify-content-between py-3">
                        <div className="dropdown">
                            <button className="btn btn-light dropdown-toggle fs-6 fw-bold text-dark me-1" type="button"
                                    id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                Sort By
                            </button>
                            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                <li className="dropdown-item fs-6"
                                    onClick={() => {setSortState(sortByReference)}}>Invoice Reference</li>
                                <li className="dropdown-item fs-6"
                                    onClick={() => {setSortState(sortByTotal)}}>Invoice Total</li>
                                <li className="dropdown-item fs-6"
                                    onClick={() => {setSortState(sortByDate)}}>Date Created</li>
                                <li className="dropdown-item fs-6"
                                    onClick={() => {setSortState(sortByDate)}}>Date Due</li>
                            </ul>
                        </div>
                        <div className="dropdown">
                            <button className="btn btn-light dropdown-toggle fs-6 fw-bold text-dark me-4" type="button"
                                    id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                Filter By Status
                            </button>
                            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                <li className="dropdown-item fs-6"
                                    onClick={() => {setFilteredInvoiceState(invoices.filter(filterInvoices("1")))}}
                                >Paid</li>
                                <li className="dropdown-item fs-6"
                                    onClick={() => {setFilteredInvoiceState(invoices.filter(filterInvoices("2")))}
                                }>Pending</li>
                                <li className="dropdown-item fs-6"
                                    onClick={() => {setFilteredInvoiceState(invoices.filter(filterInvoices("3")))}}
                                >Cancelled</li>
                                <li className="dropdown-item fs-6"
                                    onClick={() => {setFilteredInvoiceState(invoices.filter(filterInvoices("4")))}}
                                >Overdue</li>
                                <li className="dropdown-item fs-6"
                                    onClick={() => {setFilteredInvoiceState(invoices)}}
                                >View All</li>
                            </ul>
                        </div>
                        <p>
                            <button type="button" className="btn btn-info text-nowrap" data-bs-toggle="modal" data-bs-target="#newInvoiceModal">
                                <div className="badge text-bg-dark p-1"><i className="fa-solid fa-plus fa-lg"></i></div>
                                <span className="text-white fs-5"> New Invoice</span>
                            </button>
                        </p>
                    </div>
                </header>
                <main>
                    {sortState.map((invoice) => {
                            return (
                                <InvoiceCards handleCardClick={handleCardClick} invoice={invoice} key={invoice.id}/>
                                );
                        })
                    }
                </main>
                <footer>
                    <hr className="col-12 mt-4"/>
                    <div className="col-12">© Copyright iO Academy 2022</div>
                </footer>
            </div>
        </>
    );
}

export default Invoices;