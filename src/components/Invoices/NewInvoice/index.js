// you will need to import dateFormatter via utils.js
import ClientDropDown from "./ClientDropDown";
import InputTable from "./InputTable";

const NewInvoice = ({handleSubmit}) => {

    const todayDate = Date.now();
    todayDate.toString();

    const dateFormatter = (dateString) => { // this will be called from utils.js
        const date = new Date(dateString);
        const options = {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
        };
        return (new Intl.DateTimeFormat('en-GB', options).format(date));
    }

    const dueDate = new Date();
    dueDate.setDate(dueDate. getDate() + 30);

    return (
        <>
            <div id="newInvoiceModal" className="modal container end-0" tabIndex="-1">
                <div className="modal-dialog modal-dialog-scrollable modal-dialog-centered modal-lg">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title fw-bold">New Invoice</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal"
                                    aria-label="Close">
                            </button>
                        </div>
                        <div className="modal-body overflow-auto px-3">
                            <div className="container">
                                <div className="row d-flex justify-content-between">
                                    <div className="col-4">
                                        <div>
                                            <h6>From</h6>
                                            <ul className="list-unstyled">
                                                <li>Kermit the Frog</li>
                                                <li>Kermit's Swamp</li>
                                                <li>Beverly Hills</li>
                                                <li>California</li>
                                            </ul>
                                        </div>
                                        <div>
                                            <h6>To</h6>
                                            <ClientDropDown />
                                        </div>
                                    </div>
                                    <div className="col-2"></div>
                                    <div className="col-4">
                                        <h6>Status</h6>
                                        <ul className="btn btn-outline-warning ps-4 disabled opacity-100">
                                            <li><strong>Pending</strong></li>
                                        </ul>
                                        <h6>Created</h6>
                                        <p>{dateFormatter(todayDate)}</p>
                                        <h6>Due</h6>
                                        <p>{dateFormatter(dueDate)}</p>
                                    </div>
                                </div>
                            </div>
                            <table className="table">
                                <thead className="border-top border-bottom">
                                    <tr>
                                        <th scope="col">Description</th>
                                        <th scope="col">Quantity</th>
                                        <th scope="col">Rate</th>
                                        <th scope="col">Total</th>
                                        <th scope="col"></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="vh-10">
                                        <td>
                                            <InputTable />
                                        </td>
                                    </tr>
                                    <tr className="bg-warning">
                                        <td></td>
                                        <td></td>
                                        <td className="text-end fw-bold">Total</td>
                                        <td></td>
                                        <th className="text-end">£500.00</th>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-success" data-bs-dismiss="modal"
                            onClick={handleSubmit}>
                                Create invoice
                            </button>
                            <button type="button" className="btn btn-danger" data-bs-dismiss="modal">Cancel invoice</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default NewInvoice;