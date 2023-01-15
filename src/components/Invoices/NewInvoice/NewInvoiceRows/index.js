const NewInvoiceRows = (props) => {

    return (
        <>
            {props.rowsState.map((row, index) => {
                return (
                    <tr className="mt-2">
                        <td>
                            <textarea
                                className="form-control"
                                rows="5"
                                id="description"
                                name="text"
                                value={row.description}
                                onChange={(event) => {
                                    props.handleDescriptionChange(event.target.value);
                                }
                                }
                            >
                            </textarea>
                        </td>
                        <td className="input-group mb-3">
                            <input type="number" min="0" step="1" className="form-control" id="qty"/>
                        </td>
                        <td className="input-group mb-3" placeholder="0">
                            <span className="input-group-text">£</span>
                            <input type="number" min="0" step="1" className="form-control" id="rate"/>
                        </td>
                        <td >£{row.total}</td>
                        <td className="text-center">
                            <button className="btn btn-success px-5 py-2 mb-3" type="submit" onClick={props.handleCreateRow}>+
                            </button>
                            <button className="btn btn-danger px-5 py-2" type="submit" onClick={(event) => {
                                event.preventDefault();
                                props.handleDeleteRow(index);
                            }}>-</button>
                        </td>
                    </tr>
                );
            })}
        </>
    );
}

export default NewInvoiceRows
