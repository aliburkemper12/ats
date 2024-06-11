export default function Navbar() {
    return (
        <div className="row">
            <nav className="navbar">
                <div className="col-xl-2 col-lg-2">
                    <div id="navbar-link">
                        <li><a className="nav-text" href="/"><span className="font-link">HOME</span></a></li>
                        <li><a className="nav-text" href="/About"><span className="font-link">ABOUT</span></a></li>
                        <li><a className="nav-text" href="/Contact"><span className="font-link">CONTACT</span></a></li>
                    </div>
                </div>
                <div className="col-xl-1 col-lg-12">
                    <div id="middle">
                        <a className="nav-name">LOREM IPSUM</a>
                    </div>
                </div>
            </nav>
        </div>
        );
}