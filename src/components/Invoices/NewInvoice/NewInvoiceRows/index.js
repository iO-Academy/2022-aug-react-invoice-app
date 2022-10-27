import {useEffect, useState} from "react";

const NewInvoiceRows = (props) => {

    return (
        <form>
            {props.rowsState.map((row, index) => {
                return (
            <div className="row mt-2">
                <div className="col-6">
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
                </div>
                <div className="col input-group mb-3 w-auto h-25">
                    <input type="number" min="0" step="1" className="form-control" id="qty"/>
                </div>
                <div className="col input-group mb-3 w-auto h-25" placeholder="0">
                    <span className="input-group-text">£</span>
                    <input type="number" min="0" step="1" className="form-control" id="rate"/>
                </div>
                <div className="col">£{row.total}</div>
                <div className="col text-center">
                    <button className="btn btn-success px-5 py-2 mb-3" type="submit" onClick={props.handleCreateRow}>+
                    </button>
                    <button className="btn btn-danger px-5 py-2" type="submit" onClick={(event) => {
                        event.preventDefault();
                        props.handleDeleteRow(index);
                    }}>-</button>
                </div>
            </div>
                );
            })}
        </form>
    );
}

// const NewInvoiceRows = (props) => {
//     const [description, setDescription] = useState(props.row.description);
//
//     useEffect(() => {
//         props.handleDescriptionChange(props.dataindex, description);
//     }, [description]);
//
//     return (
//             <div className="row mt-2">
//                 <div className="col-6">
//                     <textarea
//                         className="form-control"
//                         rows="5"
//                         id="description"
//                         name="text"
//                         value={description}
//                         onChange={(event) => {
//                             setDescription(event.target.value);
//                         }
//                     }
//                     >
//                     </textarea>
//                 </div>
//                 <div className="col input-group mb-3 w-auto h-25">
//                     <input type="number" min="0" step="1" className="form-control" id="qty"/>
//                 </div>
//                 <div className="col input-group mb-3 w-auto h-25" placeholder="0">
//                     <span className="input-group-text">£</span>
//                     <input type="number" min="0" step="1" className="form-control" id="rate"/>
//                 </div>
//                 <div className="col">£{props.row.total}</div>
//                 <div className="col text-center">
//                     <button className="btn btn-success px-5 py-2 mb-3" type="submit" onClick={props.handleCreateRow}>+
//                     </button>
//                     <button className="btn btn-danger px-5 py-2" type="submit" onClick={(event) => {
//                         event.preventDefault();
//                         props.handleDeleteRow(props.dataindex);
//                     }}>-</button>
//                 </div>
//             </div>
//     );
// }

export default NewInvoiceRows