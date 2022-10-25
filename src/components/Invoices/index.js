import InvoiceCards from "./InvoiceCards";
import NewInvoice from "./NewInvoice";
import ViewInvoice from "./ViewInvoice";

const Invoices = () => {
    return (
        <>
            <div className="container ps-3 pe-3 ms-4">
                <div className="row">
                    <div className="col-12 pt-5 pl-2">
                        <h1 className="display-1 fw-bolder ">Invoices</h1>
                        <div className=" mb-5 text-secondary fs-4">There are 7 unpaid invoices</div>
                </div>
                <div className="row justify-content-between">
                        <div className="col-3 mb-5">
                            <div className="dropdown">
                                <button className="btn btn-light dropdown-toggle fs-6" type="button"
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
                        </div>
                        <div className="col-4 mb-5">
                            <div className="dropdown">
                                <button className="btn btn-light dropdown-toggle fs-6" type="button"
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
                        </div>

                    <div className="col-4 mb-5" >
                        <button className="btn btn-info text-white fs-6">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="dark"
                                 className="bi bi-plus-square-fill" viewBox="0 0 16 16">
                                <path
                                    d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm6.5 4.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3a.5.5 0 0 1 1 0z"/>
                            </svg> New Invoice</button>
                    </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-12 card mb-2 p-3"> Text</div>
                </div>

                <div className="row">
                    <div className="col-12 card mb-2 p-3"> Text</div>
                </div>

                <div className="row">
                    <div className="col-12 card mb-2 p-3"> Text</div>
                </div>

                <div className="row">
                    <hr className="col-12 mt-4 me-5" />
                        <div className="col-12">© Copyright iO Academy 2022 </div>
                </div>
            </div>
            <InvoiceCards />
            <NewInvoice />
            <ViewInvoice />
        </>
    );
}

export default Invoices;