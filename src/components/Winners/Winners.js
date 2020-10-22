import React, {useState} from 'react';
import {TabsInfo} from '../Tabs/TabsInfo';


import './Winners.scss';
import nachos from '../../images/winners/nachos.png';
import nachosMini from '../../images/winners/mini-nachos.png';
import update from '../../images/winners/mobile/update.svg';
import search from '../../images/icons/Search.svg';
import Tabs from '../Tabs/Tabs';
import {TabsPanel} from '../Tabs/TabsPanel';

// const items = [
//     { title: 'London', content: 'London is the capital city of England.' },
//     { title: 'Paris', content: 'Paris is the capital of France.' },
//     { title: 'Tokyo', content: 'Tokyo is the capital of Japan.' },
// ];

function Winners() {
    const [click, setClick] = useState(false);



    const handleClick = () => setClick(!click);


    return (
        <div className="winners">
            <div className="container">
                <div className="winners__wrapper">
                    <div className="winners__head">
                        <h2 className="winners__title">Победители розыгрыша</h2>
                        <div className="winners__info">
                            <div className="winners__info-first">
                                Все победители будут опубликованы не позднее 31 декабря 2020 года.
                            </div>
                            <div className="winners__info-second">
                                Чтобы проверить победу, введите номер телефона:
                            </div>
                        </div>
                    </div>
                    <div className="winners__body">
                        <div className="winners__body-search">
                            <div className="winners__body-wrapper">
                                <input
                                    className="winners__body-input"
                                    placeholder="+7 (___) ___-__-__"
                                    type="tel"
                                    name="phone"/>
                                <button className="winners__body-btn">
                                    <img src={search} alt="search"/>
                                </button>
                            </div>
                        </div>
                        <div className="winners__body-table">
                            <Tabs items={TabsPanel} content={TabsInfo}/>

                            {/* Moved into Tabs component */}
                            {/* <div className="winners__btn-wrap">
                                <button className="winners__btn">Показать ещё</button>
                            </div> */}
                            <div className="winners__btn-mobile-wrapper">
                                <button className="winners__btn-mobile">
                                    <img src={update} alt="upd"/>
                                </button>
                                <div className="winners__btn-mobile-text">
                                    Ещё Победители
                                </div>
                            </div>
                        </div>
                    </div>
                    <img className="winners__nachos-mini" src={nachosMini} alt="nachos"/>
                    <img className="winners__nachos" src={nachos} alt="nachos"/>
                </div>          
            </div>
        </div>
    );

}

export default Winners;
