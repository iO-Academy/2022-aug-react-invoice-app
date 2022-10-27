import InvoiceCards from "./InvoiceCards";
import NewInvoice from "./NewInvoice";
import ViewInvoice from "./ViewInvoice";
import {useState, useEffect} from "react";


const Invoices = () => {

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

    // --- on mount logs the data retrieved ---
    useEffect( () => {
        fetchInvoices()
            .then((invoiceData) => {
                setInvoices(invoiceData.data);
            })
            .catch((err) => {
                err.message = 'Error! Could not resolve promise.';
            });
    });

    // --- filtered unpaid invoices ---
    const filteredInvoices = invoices.filter(invoice => invoice.status === "2");
    const unpaidInvoices = filteredInvoices.length;

    // hardcoded data to submit on POST
    const newInvoice = {
        "client": 2,
        "total": 1234,
        "details": [
            {
                "quantity": 2,
                "rate": 617,
                "total": 1234,
                "description": "Optional text field"
            }
        ]
    };

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
        return await extractResponseData(response);
    }

    // --- handles newInvoice submission ---
    const handleSubmit = () => {
        postNewInvoice(newInvoice)
            .then((res) => {
                // --- hardcoded data to update invoices State ---
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


    return (
        <>
            <ViewInvoice />
            <NewInvoice handleSubmit={handleSubmit}/>
            <div className="py-5 px-3">
                <header className="d-flex justify-content-between align-items-end flex-wrap pt-3 px-0">
                    <div>
                        <h1 className="fw-bolder">Invoices</h1>
                        <p>There are {unpaidInvoices} unpaid invoices</p>
                    </div>
                    <div className="d-flex justify-content-between py-3">
                        <div className="dropdown">
                            <button className="btn btn-light dropdown-toggle fs-6 fw-bold text-dark me-1" type="button"
                                    id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                Sort By
                            </button>
                            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                <li><a className="dropdown-item fs-6" href="#">Invoice Reference</a></li>
                                <li><a className="dropdown-item fs-6" href="#">Invoice Total</a></li>
                                <li><a className="dropdown-item fs-6" href="#">Date Created</a></li>
                                <li><a className="dropdown-item fs-6" href="#">Date Due</a></li>
                            </ul>
                        </div>
                        <div className="dropdown">
                            <button className="btn btn-light dropdown-toggle fs-6 fw-bold text-dark me-4" type="button"
                                    id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                Filter By Status
                            </button>
                            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                <li><a className="dropdown-item fs-6" href="#">Paid</a></li>
                                <li><a className="dropdown-item fs-6" href="#">Pending</a></li>
                                <li><a className="dropdown-item fs-6" href="#">Cancelled</a></li>
                                <li><a className="dropdown-item fs-6" href="#">Overdue</a></li>
                                <li><a className="dropdown-item fs-6" href="#">View All</a></li>
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
                    {invoices.map((invoice) => {
                            return (
                                <InvoiceCards invoice={invoice} />
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