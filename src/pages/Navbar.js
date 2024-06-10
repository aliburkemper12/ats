export default function Navbar() {
    return (
        <container className="wrapper">
            <nav className="navbar">
                <div id="navbar-link">
                    <li><a className="nav-text" href="/"><span className="font-link">HOME</span></a></li>
                    <li><a className="nav-text" href="/About"><span className="font-link">ABOUT</span></a></li>
                    <li><a className="nav-text" href="/Contact"><span className="font-link">CONTACT</span></a></li>
                </div>
                <ul>
                    <a className="nav-name">LOREM IPSUM</a>
                </ul>
                <ul></ul>
            </nav>
        </container>
        );
}