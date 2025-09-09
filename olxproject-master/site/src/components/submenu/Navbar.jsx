import React from 'react'
import logo from '../../assets/image/logo.png'
import border from '../../assets/image/border.svg'
import plusicon from '../../assets/image/plusicon.svg'

function Navbar() {
    return (
        <>


            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container">
                    <a className="navbar-brand" href="#">
                        <img src={logo} alt="" />
                    </a>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav   mb-2 mb-lg-0">

                            <li className="nav-item dropdown  mx-3 d-flex justify-content-center align-items-center border border-black gap-3 px-2">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
                                </svg>
                                <a
                                    className="nav-link dropdown-toggle"
                                    href="#"
                                    role="button"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    Pakistan
                                </a>
                                <ul className="dropdown-menu">
                                    <li>
                                        <a className="dropdown-item" href="#">
                                            Action
                                        </a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="#">
                                            Another action
                                        </a>
                                    </li>
                                    <li>
                                        <hr className="dropdown-divider" />
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="#">
                                            Something else here
                                        </a>
                                    </li>
                                </ul>
                            </li>

                        </ul>
                        <form className="d-flex w-50 border border-black " role="search">
                            <input
                                className="form-control"
                                type="search"
                                placeholder="Find Cars, Mobile Phone and more..."
                                aria-label="Search"
                            />
                            <div className='bg-black p-2 px-3 text-white'>
                                <svg className='' xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
                                </svg>
                            </div>

                        </form>
                    </div>
                    <div className="login">


                        {/* Button trigger modal */}
                        <button
                            type="button"
                            className="btn btn-primary"
                            data-bs-toggle="modal"
                            data-bs-target="#exampleModal"
                        >
                            Login
                        </button>
                        {/* Modal */}
                        <div
                            className="modal fade"
                            id="exampleModal"
                            tabIndex={-1}
                            aria-labelledby="exampleModalLabel"
                            aria-hidden="true"
                        >
                            <div className="modal-dialog modal-dialog-centered">
                                <div className="modal-content">

                                    <div className="modal-header d-flex flex-column">
                                        <button
                                            type="button"
                                            className="btn-close"
                                            data-bs-dismiss="modal"
                                            aria-label="Close"
                                        />
                                        <h1 className="modal-title fs-1 fw-blod" id="exampleModalLabel">
                                            Olx
                                        </h1>
                                        <h2 className='fs-3 fw-500'>Welcome to OLX</h2>
                                        <span>The trusted community of buyers and sellers.</span>

                                    </div>
                                    <div className="modal-body">
                                        <form>
                                            <div className="mb-3">
                                                <label htmlFor="exampleInputEmail1" className="form-label">
                                                    Email address
                                                </label>
                                                <input
                                                    type="email"
                                                    className="form-control"
                                                    id="exampleInputEmail1"
                                                    aria-describedby="emailHelp"
                                                    placeholder='Enter Email/Username'
                                                />
                                                <div id="emailHelp" className="form-text">
                                                    We'll never share your email with anyone else.
                                                </div>
                                            </div>
                                            <div className="mb-3">
                                                <label htmlFor="exampleInputPassword1" className="form-label">
                                                    Password
                                                </label>
                                                <input
                                                    type="password"
                                                    className="form-control"
                                                    id="exampleInputPassword1"
                                                    placeholder='Enter Password'
                                                />
                                            </div>
                                            <div className="mb-3 form-check">
                                                <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                                <label className="form-check-label" htmlFor="exampleCheck1">
                                                    Check me out
                                                </label>
                                            </div>
                                            <div className="modal-footer">
                                                <button type="submit" className="btn btn-primary">
                                                    Submit
                                                </button>
                                                <button
                                                    type="button"
                                                    className="btn btn-secondary"
                                                    data-bs-dismiss="modal"
                                                >
                                                    Close
                                                </button>

                                            </div>

                                        </form>
                                        <span className='text-center d-block'>By continuing, you are accepting</span>

                                    </div>

                                </div>
                            </div>
                        </div>



                    </div>

</div>
            </nav>
        </>
    )
}

export default Navbar
