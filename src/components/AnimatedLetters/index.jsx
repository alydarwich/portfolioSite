import PropTypes from 'prop-types';
import "./index.scss";

const AnimatedLetters = ({ letterClass, strArray, idx }) => {
    return (
        <span>
            {strArray.map((char, i) => (
                <span key={char + i} className={`${letterClass} _${i + idx}`}>
                    {char}
                </span>
            ))}
        </span>
    );
};

AnimatedLetters.propTypes = {
    letterClass: PropTypes.string.isRequired,  // Ensure it's a string and required
    strArray: PropTypes.arrayOf(PropTypes.string).isRequired,  // Ensure it's an array of strings and required
    idx: PropTypes.number.isRequired  // Ensure it's a number and required
};

export default AnimatedLetters;
