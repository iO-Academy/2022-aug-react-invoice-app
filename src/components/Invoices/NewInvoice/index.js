// you will need to import dateFormatter via utils.js
import ClientDropDown from "./ClientDropDown";
import InputTable from "./InputTable";

const NewInvoice = () => {

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

    console.log(dateFormatter(todayDate));
    console.log(dateFormatter(dueDate)); // leaving these in to check that import of dateFormatter is working. Remove once done.

    return (
        <>
            <div>Created: {dateFormatter(todayDate)}</div>
            <div>Due: {dateFormatter(dueDate)}</div>
            <ClientDropDown />
            <InputTable />
        </>
    )
}

export default NewInvoice;