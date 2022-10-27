const DropDownOptions = (props) => {

    const listItem = props.listItem;

    return (
        <li><a className="dropdown-item fs-6" href="#">{listItem}</a></li>
    )
}

export default DropDownOptions;