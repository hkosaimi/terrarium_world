import "./Navbar.css";
import logo from "../../assets/tw.png";
import { PiBag } from "react-icons/pi";
function Header() {
  let Menu = () => (
    <>
      <p>
        <a href="">Home</a>
      </p>
      <p>
        <a href="#about">About</a>
      </p>
      <p>
        <a href="#contact">Contact</a>
      </p>
    </>
  );

  return (
    <>
      <div className="navbar">
        <div className="navbar__logo">
          <img src={logo} alt="" />
        </div>
        <div className="navbar__menu">
          <Menu />
        </div>
        <div className="navbar__bag">
          <PiBag />
        </div>
      </div>
    </>
  );
}

export default Header;
