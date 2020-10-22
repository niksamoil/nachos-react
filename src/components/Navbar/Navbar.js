import React, {useState} from 'react'
// import {GoThreeBars} from 'react-icons/go';
// import {IoMdClose} from 'react-icons/io';
import {Link} from 'react-router-dom';
import {SidebarData} from './SidebarData';
import mobFire from '../Header/img/mob-fire.svg';
import mobFireTwo from '../Header/img/mob-fire-two.svg';
import mobFireThree from '../Header/img/mob-fire-three.svg';
import './Navbar.scss';




function Navbar() {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);
    
    return (
        <>
			
            <nav className={click ? 'header-menu__nav header-menu__nav_show' : 'header-menu__nav'}>
                    <ul className="header-menu__items">
                       
                        
                        {SidebarData.map((item, index) => {
                            return (
                                <li key={index} className={item.cName}>
                                    <Link to={item.path} className={item.cNameLink} onClick={closeMobileMenu}>
                                        {item.title}
                                    </Link>
                                </li>
                            )
                        })}
                       

                    </ul>

                    <button className="header__btn header__btn_hidden">Зарегистрировать чек</button>

                    <button className="header-menu__login header-menu__login_hidden">
                        Личный кабинет
                    </button>

                    <div className="header-menu__mobile-info">
                        <a href="tel:+89094444513">8 (909) 444-45-13</a>
                        <div>
                            Звонок по России бесплатный. <br/>
                            Пн-Сб с 9:00 до 19:00 (МСК)
                        </div>
                    </div>

                    <div className="header-menu__mobile-fire">
                        <img src={mobFire} alt="fire-mobile"/>
                        <img src={mobFireTwo} alt="fire-mobile"/>
                        <img src={mobFireThree} alt="fire-mobile"/>
                    </div>
            </nav>


            <div className="navbar" onClick={handleClick}>
                <i className={click ? 'fas fa-times' : 'fas fa-bars'}></i>
			</div>
		</>
    )
}

export default Navbar;
