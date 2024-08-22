import "./index.scss";
import PropTypes from 'prop-types';

const ProgressBar = ({ progress, className }) => {
    const progressBarStyles = {
        width: `${progress}%`,
    };

    return (
        <div className={`progress-bar ${className}`}>
            <div className="progress" style={progressBarStyles}></div>
        </div>
    );
};

ProgressBar.propTypes = {
    progress: PropTypes.number.isRequired, // Assuming progress should always be a number
    className: PropTypes.string,
};

export default ProgressBar;
