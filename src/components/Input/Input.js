import React from "react";
import search from "../../images/icons/Search.svg";
import "./Input.scss";
import { useSelector, useDispatch } from 'react-redux';
import { setInputValue } from '../../actions/phoneActions';
import {getData} from '../../actions/getDataActions';


const myHeaders = new Headers();
myHeaders.append("Content-Type", "application/x-www-form-urlencoded");
myHeaders.append("Accept", "application/json");
myHeaders.append(
	"Actie-Promo-Action",
	"0a3cfda0-21fb-4510-878a-8016a0c18e15"
);

const requestOptions = {
	method: "GET",
	headers: myHeaders,
	redirect: "follow",
};

const url = "https://stage.actie.ru/api/v1/checks/winners/";



function Input() {

	const state = useSelector(state => state.phone)
	const stateData = useSelector(state => state.data);

	const dispatch = useDispatch()

	console.log(stateData);

	const handleChange = (e) => {
		dispatch(setInputValue(e.target.value));
	};

	const handleSubmit = (e) => {
		e.preventDefault();
	};

	//test
	const handleClick = () => {
		dispatch(getData(url, 1, requestOptions))
	}


	return (
		<div className="winners__body-search">
			{/* <div style={{color: 'white'}}> {stateData.data} </div> */}
			<form className="winners__body-wrapper" onSubmit={handleSubmit}>
				<input
					className="winners__body-input"
					placeholder="+7 (___) ___-__-__"
					type="tel"
					name="phone"
					value={state.value}
					onChange={handleChange}
				/>
				<button className="winners__body-btn" onClick={handleClick} >
					<img src={search} alt="search" />
				</button>
			</form>
		</div>
	);
}


export default Input;
