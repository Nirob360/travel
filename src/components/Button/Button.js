import { Link } from 'react-router-dom';
import './Button.scss';

const STYLES = ['btn--primary', 'btn--outline'];
const SIZE = ['btn--medium', 'btn--large'];

const Button = ({ children, onClck, buttonStyle, buttonSize }) => {
    const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];
    const checkButtonSize = SIZE.includes(buttonSize) ? buttonSize : SIZE[0];

    return (
        <Link to="singup">
            <button
                type="button"
                className={`btn ${checkButtonStyle} ${checkButtonSize}`}
                onClick={onClck}
            >
                {children}
            </button>
        </Link>
    );
};

export default Button;
