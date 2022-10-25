import InvoiceCards from "./InvoiceCards";
import NewInvoice from "./NewInvoice";
import ViewInvoice from "./ViewInvoice";

const Invoices = () => {
    return (
        <>
            <div className="container-fluid px-5">
                <div className="row">
                    <div className="col-12 pt-5">
                        <h1 className="display-1 fw-bolder ">Invoices</h1>
                        <div className=" mb-5 text-secondary fs-2">There are 7 unpaid invoices</div>
                </div>
                    <div className="row">
                        <div className="col-3 mb-5">
                            <div className="dropdown">
                                <button className="btn btn-light dropdown-toggle fs-2" type="button"
                                        id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                    Sort By
                                </button>
                                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                    <li><a className="dropdown-item fs-2" href="#">Invoice Reference</a></li>
                                    <li><a className="dropdown-item fs-2" href="#">Invoice Total</a></li>
                                    <li><a className="dropdown-item fs-2" href="#">Date Created</a></li>
                                    <li><a className="dropdown-item fs-2" href="#">Date Due</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-3 mb-5">
                            <div className="dropdown">
                                <button className="btn btn-light dropdown-toggle fs-2" type="button"
                                        id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                    Filter By Status
                                </button>
                                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                    <li><a className="dropdown-item fs-2" href="#">Paid</a></li>
                                    <li><a className="dropdown-item fs-2" href="#">Pending</a></li>
                                    <li><a className="dropdown-item fs-2" href="#">Cancelled</a></li>
                                    <li><a className="dropdown-item fs-2" href="#">Overdue</a></li>
                                    <li><a className="dropdown-item fs-2" href="#">View All</a></li>
                                </ul>
                            </div>
                        </div>
                        <button className="col-3 mb-5 btn btn-info text-white fs-3">New Invoice</button>
                    </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-12 card mb-2 p-3 justify-content-center"> Text</div>
                </div>

                <div className="row">
                    <div className="col-12 card mb-2 p-3"> Text</div>
                </div>

                <div className="row">
                    <div className="col-12 card mb-2 p-3"> Text</div>
                </div>

                <div className="row">
                    <hr className="col-12 mt-4 " />
                        <div className="col-12"> Text</div>
                </div>
            <InvoiceCards />
            <NewInvoice />
            <ViewInvoice />
        </>
    );
}

export default Invoices;