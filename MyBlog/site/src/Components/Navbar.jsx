import React from 'react'
import logo from '../images/Revellogo.png'

const Navbar = () => {
  return (
    <section className='bg-body-tertiary'>
      <div className="container">
        <div className="row">
          <div className="col">
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
              <div className="container-fluid">
                <button
                  className="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarTogglerDemo01"
                  aria-controls="navbarTogglerDemo01"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                  <a className="navbar-brand" href="#">
                    <img src={logo} alt="" />
                  </a>
                  <ul className="navbar-nav me-auto mb-2 mb-lg-0 shoe-container ">
                    <li className="nav-item">
                      <a className="nav-link active" aria-current="page" href="#">
                        Home
                      </a>
                    </li>
                    <li className="nav-item dropdown shoe ">
                      <a className="nav-link icon" href="#" role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false">
                        Feacture  
                        <ion-icon name="chevron-down-outline"></ion-icon>
                      </a>

                      <ul className="dropdown-content">
                        <li>
                          <a className="dropdown-item" href="#">
                            Action
                          </a>
                          
                          




                        </li>
                        <hr/>
                        <li>
                          <a className="dropdown-item" href="#">
                            Another action
                          </a>
                        </li>
                        <hr />
                        <li>
                          <a className="dropdown-item" href="#">
                            Something else here
                          </a>
                        </li>
                        <hr />
                      </ul>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link ">
                        Mega Menu
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link ">
                        Documentation
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link ">
                        Dwonload This tamplate
                      </a>
                    </li>

                  </ul>

                  <i class="bi bi-search"></i>
                </div>
              </div>
            </nav>

          </div>
        </div>
      </div>
    </section>
  )
}

export default Navbar