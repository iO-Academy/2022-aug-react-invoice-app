import InvoiceCards from "./InvoiceCards";
import NewInvoice from "./NewInvoice";
import ViewInvoice from "./ViewInvoice";

const Invoices = () => {
    return (
        <>
            <div className="p-5">
            <header className="d-flex justify-content-between align-items-end flex-wrap pt-3 px-0">
                <div>
                    <h1 className="fw-bolder">Invoices</h1>
                    <p>There are 7 unpaid invoices</p>
                </div>
                <div className="d-flex justify-content-between">
                    <div className="dropdown">
                        <button className="btn btn-light dropdown-toggle fs-6 me-1" type="button"
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
                        <button className="btn btn-light dropdown-toggle fs-6 me-4" type="button"
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
                        <button type="button" className="btn btn-info">
                            <div className="bg-white d-inline block"><i className="bi bi-plus-square-fill"></i></div>
                            <span className="text-white"> New Invoice</span>
                        </button>
                    </p>
                </div>
            </header>
            <main>
                <div className="row">
                    <div className="col-12 card mb-2 p-3 justify-content-center"> Text</div>
                </div>

                <div className="row">
                    <div className="col-12 card mb-2 p-3"> Text</div>
                </div>

                <div className="row">
                    <div className="col-12 card mb-2 p-3"> Text</div>
                </div>
            </main>
            <footer>
                <hr className="col-12 mt-4 me-5"/>
                <div className="col-12">© Copyright iO Academy 2022</div>
            </footer>
            </div>
            <InvoiceCards />
            <NewInvoice />
            <ViewInvoice />
        </>
    );
}

export default Invoices;