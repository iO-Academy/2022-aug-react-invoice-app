import DropDownOptions from "./DropDownOptions";

const DropdownElements = (props) => {

    const dropdownName = props.dropdownName;
    const listItemsArray = props.listItemsArray;

    return (
        <div className="dropdown">
            <button className="btn btn-light dropdown-toggle fs-6 fw-bold text-dark me-1" type="button"
                    data-bs-toggle="dropdown" aria-expanded="false">
                {dropdownName}
            </button>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                {listItemsArray.map((listItem, index) => {
                    return <DropDownOptions listItem={listItem} key={index} />
                })}
            </ul>
        </div>
    )
}

export default DropdownElements;