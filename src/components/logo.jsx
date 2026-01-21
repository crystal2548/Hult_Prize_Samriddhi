import "./styles/navbar.css";
import logo from "../assets/logo.png";
import SamriddhiLogo from "../assets/SamriddhiLogo.png";

let Logo = () => {
    return (
        <div className="navbar-logo-section">
            <img src={logo} alt="LOGO" width={60} height={60} />
            <div className="navbar-logo-divider"></div>
            <img src={SamriddhiLogo} alt="SamriddhiLogo" width={60} height={60} />
        </div>
    )
}

export default Logo;