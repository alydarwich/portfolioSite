import PropTypes from "prop-types";

const AnimatedLetters = ({ letterClass, strArray, idx }) => {
    return (
        <span>
            {strArray.map((char, i) => (
                <span key={i} className={`${letterClass} _${i + idx}`}>
                    {char}
                </span>
            ))}
        </span>
    );
};

// Define prop types
AnimatedLetters.propTypes = {
    letterClass: PropTypes.string.isRequired,
    strArray: PropTypes.arrayOf(PropTypes.string).isRequired,
    idx: PropTypes.number.isRequired,
};

export default AnimatedLetters;
