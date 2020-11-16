import React, { useState, useEffect } from "react";
import _ from "lodash";
import imgSpeaker from '../../images/winners/mobile/jbl-speaker.png';
import imgHoodie from '../../images/winners/mobile/hoodie.png';
// import { connect } from 'react-redux';
// import { inputValue } from '../../actions/phoneActions'


export default function GetApiData({ active, page, disableButton }) {
	const url = "https://stage.actie.ru/api/v1/checks/winners/";
	let myHeaders = new Headers();
	myHeaders.append("Content-Type", "application/x-www-form-urlencoded");
	myHeaders.append("Accept", "application/json");
	myHeaders.append(
		"Actie-Promo-Action",
		"0a3cfda0-21fb-4510-878a-8016a0c18e15"
	);

	let requestOptions = {
		method: "GET",
		headers: myHeaders,
		redirect: "follow",
	};

	// const img = '../../images/winners/mobile/jbl-speaker.png';

	const [error, setError] = useState(null);
	const [isLoaded, setIsLoaded] = useState(false);
	const [items, setItems] = useState([]);
	const [filteredItems, setFilteredItems] = useState([]);

	// const [imgSrc, setImgSrc] = useState(img)
	// if (active){

	// }

	useEffect(
		() => {
			fetch(`${url}?page=${page}`, requestOptions)
				.then((res) => res.json())
				.then(
					(result) => {
						setIsLoaded(true);
						if (result.checks.length) {
							setItems([...items, ...result.checks]);
						} else {
							disableButton();
						}

						// console.log(result.checks);
					},
					// Примечание: важно обрабатывать ошибки именно здесь, а не в блоке catch(),
					// чтобы не перехватывать исключения из ошибок в самих компонентах.
					(error) => {
						setIsLoaded(true);
						setError(error);
					}
				);
		},
		[page] // eslint-disable-line
	);

	
	useEffect(() => {
		if (items.length) {
			if (active === "weekly") {
				const filteredData = _.filter(items, (item) =>
					item.draw_period.includes("–")
					
				);
				setFilteredItems(filteredData);
				
			} else if (active === "daily") {
				const filteredData = _.filter(
					items,
					(item) => !item.draw_period.includes("–")
				);
				setFilteredItems(filteredData);
			} else {
				setFilteredItems([]);
			}
		} 
		
	}, [items, active]);

	
	// useEffect(() =>{
	// 	if(window.outerWidth < 575) {
	// 		// console.log(items);
	// 	} 
	// },[items]);

	if (error) {
		return <div>Ошибка: {error.message}</div>;
	} else if (!isLoaded || !filteredItems.length) {
		return <div>Загрузка...</div>;
	} else {
		return (
			<div className="winner__list display-show" >
				{filteredItems.map((item, i) => (
					<div className="winners__list-item" key={item.fd}>
						<img src={`${items[i].prise === "Колонока JBL"  ? imgSpeaker : imgHoodie}`} alt="prise"/>
						<div className="winners__prise">{item.prise}</div>
						<div className="winners__tel">{item.phone}</div>
						<div className="winners__data">{item.draw_period}</div>
					</div>
				))}
			</div>
		);
	}
}
