import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import './Button.scss';

interface ButtonProps {
    content: string,
    icon: boolean,
    filled: boolean,
    onClick?: React.MouseEventHandler<HTMLButtonElement>
}

const Button: React.FC<ButtonProps> = ({content, icon, filled, onClick}) => {

    const buttonClass = `button ${filled ? 'filled' : 'transparent'}`;

    return (
        <button className={buttonClass} onClick={onClick}>
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