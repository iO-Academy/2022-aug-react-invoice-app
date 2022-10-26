const ViewInvoice = () => {
    return (
        <>
            <div id="viewInvoiceModal" className="modal container" tabIndex="-1">
                <div className="modal-dialog modal-dialog-scrollable modal-dialog-centered modal-lg">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Invoice #NZ36836</h5>
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
                                                <li>Fiona Bruce</li>
                                                <li>1 Television Center</li>
                                                <li>101 Wood Lane</li>
                                                <li>London</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-2"></div>
                                    <div className="col-4">
                                        <h6>Status</h6>
                                        <ul className="btn btn-outline-warning ps-4">
                                            <li><strong>Pending</strong></li>
                                        </ul>
                                        <h6>Created</h6>
                                        <p>15 June 2022</p>
                                        <h6>Due</h6>
                                        <p>15 June 2022</p>
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
                                <tr>
                                    <td>Humour training</td>
                                    <td>10</td>
                                    <td>180.00</td>
                                    <td>£1,800.00</td>
                                </tr>
                                <tr>
                                    <td>Attendance to public networking event with Ms Bruce</td>
                                    <td>2</td>
                                    <td>1,500.00</td>
                                    <td>£3,000.00</td>
                                </tr>
                                <tr>
                                    <td>Advocating for Ms Bruce at BBC to get new spot on 'The Puppets'</td>
                                    <td>1</td>
                                    <td>1,000.00</td>
                                    <td>£1,000.00</td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td className="text-end">Total</td>
                                    <td></td>
                                    <th>£5,800,00</th>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td className="text-end text-nowrap">Paid to date</td>
                                    <td></td>
                                    <th>£0.00</th>
                                </tr>
                                <tr className="bg-warning">
                                    <td></td>
                                    <td className="text-end">Total due</td>
                                    <td></td>
                                    <th>£5,800,00</th>
                                </tr>
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
            );
        </>
    );
}

export default ViewInvoice;