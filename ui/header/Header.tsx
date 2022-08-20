export default function SiteHeader() {
    return <div>
        <nav className="navbar navbar-expand-lg bg-danger" style={{}}>
            <div className="container py-2">
                <a className="navbar-brand text-light" href="#">SiteHome</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav ">
                        <li className="nav-item">
                            <a className="nav-link active text-light" aria-current="page" href="/">Elections</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-light" href="/donations">Donations</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-light" href="#">Structure</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-light" href="#">FAQs</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-light" href="#">About</a>
                        </li>

                    </ul>
                </div>
            </div>
        </nav>
    </div>;
}