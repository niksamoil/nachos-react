import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import logo from './img/logo.png';
import afterLogo from './img/after-logo.svg';
import './Header.scss';
import Button from '../Button/Button';
import nachos from './img/nachos-pack.svg';
import fire from './img/fire.svg';

class Header extends Component {
    render() {
        return (
            <div className="header">
                <div className="container">
                    <div className="header-menu">
                        <div className="header-menu__logo">
                            <Link to="/" className="header-menu__logo-link">
                                <img src={logo} alt="logo"/>
                                <img src={afterLogo} alt="logo"/>
                            </Link>
                        </div>
                        <Navbar/>
                        <Button/>
                    </div>

                    <div className="header__content">
                        <div className="header__content-info">
                            <h1 className="header__content-title">
                                Чертовски
                                <br/>
                                хорошие начосы!
                            </h1>
                            <div className="header__content-text">
                                Купи пачку начасов в Нагнате или Шестерочке, зарегистрируй чек и получи
                                возможность выиграть крутые призы!
                                <br/>
                                Главный приз — путешествие в Португалию, чтобы
                                <br/>
                                вживую увидеть пасть дьявола «Boca de inferno»
                            </div>
                            <button className="header__btn">Зарегистрировать чек</button>
                        </div>
                        <div className="header__content-nachos">
                            <img src={nachos} alt="nachos"/>
                        </div>
                    </div>
                </div>
                <div className="header__fire">
                    <img src={fire} alt="nachos" />
                </div>

            </div>
        );
    }
}

export default Header;
