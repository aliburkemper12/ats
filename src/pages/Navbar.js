export default function Navbar() {
    return (
            <nav className="navbar">
                    <div className="col-md-1 col-2">
                        <div className="navbar-link">
                            <li><a className="nav-text" href="/"><span className="font-link">HOME</span></a></li>
                            <li><a className="nav-text" href="/About"><span className="font-link">ABOUT</span></a></li>
                            <li><a className="nav-text" href="/Contact"><span className="font-link">CONTACT</span></a></li>
                        </div>
                    </div>
                    <div className="col-md-1 col-12">
                        <div id="middle">
                            <a className="nav-name"><a id="first">LOREM</a> <a id="last">IPSUM</a></a>
                        </div>
                    </div>
            </nav>
        );
}