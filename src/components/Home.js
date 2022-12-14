import React from 'react'

function Home() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
                <ul className="navbar-nav">
                    <li className="nav-item active">
                        <a className="nav-link" href="/event"  target="_blank">Ver eventos </a>
                    </li>
                    <li className="nav-item active">
                        <a className="nav-link" href="/"  target="_blank">Ver clientes </a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Home