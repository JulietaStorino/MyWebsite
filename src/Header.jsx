
function Header() {
  return (
    <header className="head">
        <img className="head-img" src="/logo.png" alt="logo"></img>
        <nav className="nav">
            <ul className="nav-list">
                <li><a className="nav-item"  href="#">ABOUT ME</a></li>
                <li><a className="nav-item" href="#">PROYECTS</a></li>
                <li><a className="nav-item" href="#">CONTACTS</a></li>
            </ul>
        </nav>
    </header>
  );
}

export default Header