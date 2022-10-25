const InvoiceCards = () => {
    return (
        <>
            <div class="d-flex flex-wrap justify-content-between align-items-center p-2 bd-highlight border rounded">
                <div class="d-flex justify-content-between border border-danger">
                    <div class="px-4"><strong>#NZ3689</strong></div>
                    <div class="px-4 text-muted">Due 19 July 2022</div>
                    <div class="px-4 text-muted">Jenna Cole</div>
                </div>
                <div class="d-flex py-2 px-3 justify-content-between flex-grow-1 border border-danger">
                    <div class="fs-4 mb-0"><strong>£1,800.00</strong></div>
                    <ul className="ps-4 btn btn-outline-success m-0">
                        <li><strong>Paid</strong></li>
                    </ul>
                </div>
                <div className="px-2 d-none d-lg-block border border-danger">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                         className="bi bi-chevron-right" viewBox="0 0 16 16">
                        <path fill-rule="evenodd"
                              d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
                    </svg>
                </div>
            </div>


            <div className="d-flex flex-wrap justify-content-between align-items-center p-3 bd-highlight border rounded">
                    <div className="pe-4"><strong>#NZ3689</strong></div>
                    <div className="px-4 text-muted">Due 19 July 2022</div>
                    <div className="ps-4 text-muted">Jenna Cole</div>
                    <div className="fs-4 mb-0 w-50 ps-md-4"><strong>£1,800.00</strong></div>
                    <ul className="ps-4 btn btn-outline-success m-0 disabled opacity-100">
                        <li><strong>Paid</strong></li>
                    </ul>
                <div className="p-0 d-none d-xl-block">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                         className="bi bi-chevron-right" viewBox="0 0 16 16">
                        <path fill-rule="evenodd"
                              d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
                    </svg>
                </div>
            </div>
        </>
    );
}

export default InvoiceCards;