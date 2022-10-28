// you will need to import dateFormatter via utils.js
import ClientDropDown from "./ClientDropDown";
import NewInvoiceRows from "./NewInvoiceRows";
import {useEffect, useState} from "react";

const initialRowState = [
    {description: '', qty: 0, rate: 0, total: 0},
];

const NewInvoice = ({handleSubmit}) => {

    const [rowsState, setRowsState] = useState(initialRowState);

    const handleCreateRow = (event) => {
        event.preventDefault();
        setRowsState([...rowsState, {description: '', qty: 0, rate: 0, total: 0}])
    }

    const handleDeleteRow = (index) => {
        const newRowArray = rowsState.filter((element,idx) => {
            return idx !== index;
        });
        setRowsState(newRowArray);
    }

    const handleDescriptionChange = (index, value) => {
        console.log('change ' + index);
        rowsState[index].description = value;
        console.log(rowsState);
    }

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
                <div className="modal-dialog modal-dialog-scrollable modal-dialog-centered modal-xl">
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
                                {rowsState.map((row, index) => {
                                    return (
                                        <tr className="mt-2">
                                            <td>
                                                <textarea
                                                    className="form-control"
                                                    rows="5"
                                                    id="description"
                                                    name="text"
                                                    onChange={(event) => {
                                                        handleDescriptionChange(event.target.value);
                                                    }
                                                    }
                                                >
                                                </textarea>
                                            </td>
                                            <td className="mb-3">
                                                <input type="number" min="0" step="1" className="form-control" id="qty"/>
                                            </td>
                                            <td className="input mb-3" placeholder="0">
                                                {/*<span className="input-group-text">£</span>*/}
                                                <input type="number" min="0" step="1" className="form-control" id="rate"/>
                                            </td>
                                            <td>£</td>
                                            <tr>
                                                <td className="text-center">
                                                    <button className="btn btn-success px-4 py-2 mb-3" type="submit" onClick={handleCreateRow}>+
                                                    </button>
                                                    <td>
                                                        <button className="btn btn-danger px-4 py-2" type="submit" onClick={(event) => {
                                                        event.preventDefault();
                                                        handleDeleteRow(index);
                                                    }}>-</button>
                                                    </td>
                                                </td>
                                            </tr>
                                        </tr>
                                    );
                                })}
                                    {/*<NewInvoiceRows*/}
                                    {/*    rowsState={rowsState}*/}
                                    {/*    handleCreateRow={handleCreateRow}*/}
                                    {/*    handleDeleteRow={handleDeleteRow}*/}
                                    {/*    handleDescriptionChange={handleDescriptionChange}*/}
                                    {/*/>*/}
                                </tbody>
                                <tfoot>
                                    <tr className="bg-warning">
                                        <td></td>
                                        <td></td>
                                        <td className="text-end fw-bold">Total</td>
                                        <td></td>
                                        <th className="text-end">£500.00</th>
                                    </tr>
                                </tfoot>

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