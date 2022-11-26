import {dateFormatter} from "../../../helpers/utils";
import ClientDropDown from "./ClientDropDown";

import {useEffect, useState} from "react";
import NewInvoiceRows from "./NewInvoiceRows";

const NewInvoice = () => {
    const [client, setClient] = useState(-1);
    const [total, setTotal] = useState(0);
    const [details, setDetails] = useState(
        [{description: '', qty: 0, rate: 0, total: 0}]
    );

    const [rowCountState, setRowCountState] = useState(0);

    // const updateRowCountState = (addOrRemove) => {
    //     if (addOrRemove == '-') {
    //         setRowCountState((prevRowCountState) => {
    //             prevRowCountState -= 1;
    //         })
    //     } else {
    //         setRowCountState((prevRowCountState) => {
    //             prevRowCountState += 1;
    //         })
    //     }
    //     console.log(rowCountState);
    // }

    const handleCreateRow = (event) => {
        setRowCountState(rowCountState + 1)
        console.log(rowCountState)
        setDetails([...details, {description: '', qty: 0, rate: 0, total: 0}])
    }

    const handleDeleteRow = (index) => {
        if (rowCountState > 0) {
            setRowCountState(rowCountState - 1);
            console.log(rowCountState)
            const newDetails = details.filter((element, idx) => {
                    return idx !== index;
                }
            );
            setDetails(newDetails);
        }
    }

    const updateDetails = (rowNum, newDescription, newQuantity, newRate) => {
        const newDetails = details.map((detailsRow, idx) => {
            const {description, qty, rate, total} = detailsRow;
            const newDetailsRow = {description, qty, rate, total};
            if (idx === rowNum) {
                newDetailsRow.description = newDescription ?? description;
                newDetailsRow.qty = newQuantity ?? qty;
                newDetailsRow.rate = newRate ?? rate;
                newDetailsRow.total = newDetailsRow.qty * newDetailsRow.rate;
            }
            return newDetailsRow;
        });
        setDetails(newDetails);
    }

    const handleDescriptionChange = (detailsRowNum, newDescription) => {
        updateDetails(detailsRowNum, newDescription, null, null);
    }

    const handleQuantityChange = (detailsRowNum, newQuantity) => {
        updateDetails(detailsRowNum, null, newQuantity, null);
    }

    const handleRateChange = (detailsRowNum, newRate) => {
        updateDetails(detailsRowNum, null, null, newRate);
    }

    useEffect(() => {
        const newOverallTotal = details
            .map((detailsRow) => detailsRow.total)
            .reduce((overallTotal, rowTotal) => overallTotal + rowTotal);
        setTotal(newOverallTotal);
    }, [details]);

    const todayDate = new Date();
    const dueDate = new Date();
    dueDate.setDate(todayDate.getDate() + 30);

    return (
        <div id="newInvoiceModal" className="modal" tabIndex="-1">
            <div className="modal-dialog modal-dialog-scrollable modal-dialog-centered modal-lg">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">New Invoice</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal"
                                aria-label="Close">
                        </button>
                    </div>

                    <div className="modal-body px-3">
                        <form className="container">
                            <div className="d-flex justify-content-between">
                                <div className="d-flex flex-column">
                                    <h6><strong>From</strong></h6>
                                    <ul className="list-unstyled">
                                        <li>Kermit the Frog</li>
                                        <li>Kermit's Swamp</li>
                                        <li>Beverly Hills</li>
                                        <li>California</li>
                                    </ul>
                                    <h6><strong>To</strong></h6>
                                    <ClientDropDown clientsState={client} setClients={setClient} />
                                </div>
                                <div className="pe-5 d-flex flex-column">
                                    <h6><strong>Status</strong></h6>
                                    <ul className="btn btn-outline-warning ps-4">
                                        <li><strong>Pending</strong></li>
                                    </ul>
                                    <h6><strong>Created</strong></h6>
                                    <p>{dateFormatter(todayDate)}</p>
                                    <h6><strong>Due</strong></h6>
                                    <p>{dateFormatter(dueDate)}</p>
                                </div>
                            </div>
                            <div className="row mt-2 gx-2 border-top border-bottom">
                                <div className="col-4"><strong>Description</strong></div>
                                <div className="col-2"><strong>Quantity</strong></div>
                                <div className="col-2"><strong>Rate</strong></div>
                                <div className="col-2"><strong>Total</strong></div>
                                <div className="col-2"></div>
                            </div>

                            {details.map((row, index) => {
                                return (
                                    <div className="row mt-2 gx-2">
                                        <div className="col-4">
                      <textarea
                          className="form-control"
                          rows="5"
                          name="description"
                          value={details[index].description}
                          onChange={(ev) => handleDescriptionChange(index, ev.target.value)}
                      >
                      </textarea>
                                        </div>
                                        <div className="col-2">
                                            <input
                                                className="form-control"
                                                type="number"
                                                name="qty"
                                                min="0"
                                                step="1"
                                                value={details[index].qty}
                                                onChange={(ev) => handleQuantityChange(index, ev.target.value)}
                                            />
                                        </div>
                                        <div className="col-2">
                                            <div className="input-group">
                                                <span className="input-group-text">£</span>
                                                <input
                                                    className="form-control"
                                                    type="number"
                                                    name="rate"
                                                    min="0"
                                                    step="1"
                                                    value={details[index].rate}
                                                    onChange={(ev) => handleRateChange(index, ev.target.value)}
                                                />
                                            </div>
                                        </div>
                                        <div className="col-2">£{row.total}</div>
                                        <div className="col-2 d-flex flex-column">
                                            <button
                                                className="btn btn-success py-2 mb-3"
                                                type="button"
                                                onClick={handleCreateRow}
                                            >
                                                +
                                            </button>
                                            <button
                                                className="btn btn-danger py-2"
                                                type="button"
                                                onClick={() => handleDeleteRow(index)}
                                            >
                                                -
                                            </button>
                                        </div>
                                    </div>
                                );
                            })}

                            <div className="row my-2 py-1 bg-warning text-end">
                                <div className="col-10"><strong>Total</strong></div>
                                <div className="col-2"><strong>£{total}</strong></div>
                            </div>
                        </form>
                    </div>

                    <div className="modal-footer">
                        <button type="button" className="btn btn-success">Create invoice</button>
                        <button type="button" className="btn btn-danger" data-bs-dismiss="modal">Cancel invoice</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NewInvoice;