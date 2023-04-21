import React from 'react';

const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary  sticky-top">
                <div className="container-fluid background ">
                    <a className="navbar-brand text-light" href="/">Rahul Bank</a>
                    <button className="navbar-toggler text-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <a className="nav-link active text-light" aria-current="page" href="/">Home</a>
                            <a className="nav-link text-light" href="/">Features</a>

                        </div>
                        </div>
                        <div className='d-flex'>
                            <button   className='btn btn-outline-secondary text-light'> Balance:</button>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Navbar;
