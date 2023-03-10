function Navbar() {
    return (
        <section className="nav-bar">
            <nav className="navbar navbar-expand-lg navbar-style">
                <div className="container-fluid ">
                    <a className="navbar-brand logo" href="#">Hebe</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 nav-ul">
                            <li className="nav-item">
                                <a className="nav-link active" href="/">SHOP</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/">BRAND</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link">MY BOYFRIENDS BACK</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link">STAFF EDIT</a>
                            </li>
                        </ul>
                        <form className="d-flex" role="search">
                            <input className="form-control me-2 input-style" type="search" placeholder="Search" aria-label="Search" />
                            {/* <button className="btn btn-outline btn-1" type="submit">search</button> */}
                        </form>
                    </div>
                </div>
            </nav>
        </section>
    )
}
export default Navbar;