import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import './Button.scss';

interface ButtonProps {
    content: string,
    icon: boolean,
    filled: boolean
}

const Button: React.FC<ButtonProps> = ({content, icon, filled}) => {

    const buttonClass = `button ${filled ? 'filled' : 'transparent'}`;

    return (
        <button className={buttonClass}>
            <span>{content}</span>
            {icon ? (
                <span>
                    <FontAwesomeIcon icon={faChevronRight} />
                </span>
            ) : ''}
        </button>
    );
};

export default Button;