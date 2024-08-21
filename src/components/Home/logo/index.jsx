import LogoE from "../../../assets/images/alidarwish.svg";
import "./index.scss";

const Logo = () => {
    return (
        <div className="logo-container">
            <img
                className="solid-logo animate"
                src={LogoE}
                alt="JavaScript, Developer"
            />
            <svg
                version="1.0"
                xmlns="http://www.w3.org/2000/svg"
                width="274.000000pt"
                height="230.000000pt"
                viewBox="0 0 274.000000 230.000000"
                preserveAspectRatio="xMidYMid meet"
                className="svg-container"
            >
                <g
                    transform="translate(0.000000,230.000000) scale(0.100000,-0.100000)"
                    fill="none"
                >
                    
                </g>
            </svg>
        </div>
    );
};

export default Logo;
