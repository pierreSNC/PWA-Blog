import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import './Button.scss';

interface ButtonProps {
    content: string,
    icon?: boolean,
    filled: boolean,
    dark?: boolean
    onClick?: React.MouseEventHandler<HTMLButtonElement>
}

const Button: React.FC<ButtonProps> = ({content, icon,dark, filled, onClick}) => {

    const buttonClass = `button ${filled ? 'filled' : 'transparent'} ${dark ? 'dark' : 'light'}`;

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