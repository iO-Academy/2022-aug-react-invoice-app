import {changeStatusColour, currencyFormatter, currencyFormatterNoSpace, dateFormatter, changeStatusBarColour} from '../../../helpers/utils';

const ViewInvoice = (props) => {
console.log(props);
    const handleCardClick = props.handleCardClick;

    const {invoice_id,
        name,
        street_address,
        city,
        created,
        due,
        invoice_total,
        paid_to_date,
        status,
        status_name} = props.detailedInvoiceState;

    const totalDue = invoice_total - paid_to_date;

    const generateRows = props.detailsState.map((detail, index) => {
        return (
            <tr key={index}>
                <td>{detail.description}</td>
                <td>{detail.quantity}</td>
                <td>{detail.rate}.00</td>
                <td>{currencyFormatterNoSpace(detail.total)}</td>
            </tr>
        )
    })

    return (
        <>
            <div id="viewInvoiceModal" className="modal container end-0" tabIndex="-1">
                <div className="modal-dialog modal-dialog-scrollable modal-dialog-centered modal-lg">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Invoice #{invoice_id}</h5>
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
                                            <ul className="list-unstyled">
                                                <li>{name}</li>
                                                <li>{street_address}</li>
                                                <li>{city}</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-2"></div>
                                    <div className="col-4">
                                        <h6>Status</h6>
                                        {changeStatusColour(status, status_name)}
                                        <h6 className="pt-3">Created</h6>
                                        <p>{created && dateFormatter(created)}</p>
                                        <h6>Due</h6>
                                        <p>{due && dateFormatter(due)}</p>
                                    </div>
                                </div>
                            </div>
                            <table className="table">
                                <thead>
                                <tr>
                                    <th scope="col">Description</th>
                                    <th scope="col">Quantity</th>
                                    <th scope="col">Rate</th>
                                    <th scope="col">Total</th>
                                </tr>
                                </thead>
                                <tbody>
                                {generateRows}
                                <tr>
                                    <td></td>
                                    <td className="text-end">Total</td>
                                    <td></td>
                                    <th>{currencyFormatterNoSpace(invoice_total)}</th>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td className="text-end text-nowrap">Paid to date</td>
                                    <td></td>
                                    <th>{currencyFormatterNoSpace(paid_to_date)}</th>
                                </tr>
                                    {changeStatusBarColour(status, totalDue)}
                                {/*<tr>*/}
                                {/*    <td></td>*/}
                                {/*    <td className="text-end">Total due</td>*/}
                                {/*    <td></td>*/}
                                {/*    <th>{currencyFormatterNoSpace(totalDue)}</th>*/}
                                {/*</tr>*/}
                                </tbody>
                            </table>
                            <p>Payments due within 30 days.</p>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-success" data-bs-dismiss="modal">Mark as paid
                            </button>
                            <button type="button" className="btn btn-danger">Cancel changes</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ViewInvoice;