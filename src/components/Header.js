import Nav from './Nav';
import '../css/header.css';

function Header() {
  return (
    <header>
      <a href="/">
        <img src="/logo.png" alt="logo" />
      </a>
      <Nav />
    </header>
  );
}

export default Header;
