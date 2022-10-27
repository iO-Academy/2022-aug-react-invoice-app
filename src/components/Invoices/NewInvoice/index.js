// you will need to import dateFormatter via utils.js
import ClientDropDown from "./ClientDropDown";

import {useEffect, useState} from "react";
import NewInvoiceRows from "./NewInvoiceRows";

const initialRowState = [
    {description: '', qty: 0, rate: 0, total: 0},
];

const NewInvoice = () => {
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

    // console.log(dateFormatter(todayDate));
    // console.log(dateFormatter(dueDate)); // leaving these in to check that import of dateFormatter is working. Remove once done.

    return (
        <>
            {/*<div>Created: {dateFormatter(todayDate)}</div>*/}
            {/*<div>Due: {dateFormatter(dueDate)}</div>*/}
            <ClientDropDown />
            <div className="row mt-2 border-top border-bottom">
                <div className="col-6"><strong>Description</strong></div>
                <div className="col"><strong>Quantity</strong></div>
                <div className="col"><strong>Rate</strong></div>
                <div className="col"><strong>Total</strong></div>
                <div className="col"></div>
            </div>
            {/*<form>*/}
            {/*    {rowsState.map((row, index) => {*/}
            {/*    return (*/}
            {/*        <NewInvoiceRows*/}
            {/*            row={row} key={index} dataindex={index}*/}
            {/*            handleCreateRow={handleCreateRow}*/}
            {/*            handleDeleteRow={handleDeleteRow}*/}
            {/*            handleDescriptionChange={handleDescriptionChange}*/}
            {/*        />*/}
            {/*    );*/}
            {/*})}*/}
            {/*</form>*/}
            <NewInvoiceRows
                rowsState={rowsState}
                handleCreateRow={handleCreateRow}
                handleDeleteRow={handleDeleteRow}
                handleDescriptionChange={handleDescriptionChange}
            />


            <div className="row mt-2 mb-5 bg-warning">
                <div className="col-6"></div>
                <div className="col"></div>
                <div className="col text-end"><strong>Total</strong></div>
                <div className="col"></div>
                <div className="col"><strong>£500.00</strong></div>
            </div>
        </>
    )
}

export default NewInvoice;