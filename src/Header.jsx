
function Header() {
  return (
    <header>
      <div className="wrapper">
        <img className="logo" src="/logo.png" alt="logo"></img>
        <nav>
          <a className="nav-item"  href="#AboutMe">ABOUT&nbsp;ME</a>
          <a className="nav-item" href="#MyProyects">PROYECTS</a>
          <a className="nav-item" href="#ContactMe">CONTACT</a>
        </nav>
      </div>
    </header>
  );
}

export default Header