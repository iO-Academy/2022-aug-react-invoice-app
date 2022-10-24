const NewInvoice = () => {
    return (
        <>
        <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
            Launch demo modal
        </button>
            <div id="exampleModal" className="modal" tabIndex="-1">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Invoice #NZ36836</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body px-3 overflow-auto">
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
                            <button type="button" className="btn btn-success" data-bs-dismiss="modal">Mark as paid</button>
                            <button type="button" className="btn btn-danger">Cancel changes</button>
                        </div>
                    </div>
                </div>
            </div>
        </>

    );
}

export default NewInvoice;