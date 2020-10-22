import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Button.scss';


class Button extends Component {
    render() {
        return (
            <Link to='/sing-in' >
                <button className="header-menu__login">
                    Личный кабинет
                </button>
            </Link>
        );
    }
}

export default Button;
