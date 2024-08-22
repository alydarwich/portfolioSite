import Work from "../../../assets/images/Sequence 02.gif";
import "./index.scss";

const Logo1 = () => {
    return (
        <div className="job1-logo-container">
            <img
                className="solid-logo animated fadeIn"
                src={Work}
                alt="Work Experience"
            />
            <svg
                className="svg-container animated fadeIn"
                version="1.0"
                xmlns="http://www.w3.org/2000/svg"
                width="512pt"
                height="512pt"
                viewBox="0 0 512 512"
                preserveAspectRatio="xMidYMid meet"
            >
            </svg>
        </div>
    );
};

export default Logo1;
