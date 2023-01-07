const ClientNameForDropdown = (props) => {
    const {clientInfo, handleNameChange} = props;

    return (
        <>
            <div>
                <select onChange={handleNameChange} className="form-select" aria-label="Default select example">
                    <option value="Select">Select from Client List</option>
                    {clientInfo.map((clientInfo) =>
                        <option key={clientInfo.id} value={clientInfo.id}>{clientInfo.name}</option>)}
                </select>
            </div>
        </>
    );
}

export default ClientNameForDropdown;