import React,{useEffect} from 'react';
import "./Desc.css";
import imgLogo from "../../assets/logo.png";

const Desc = (props) => {
	return (
		<div className="desc-container">
			<div className="desc-wrapper">
				<span id="desc-title">Description</span>
				<p className="desc-body">
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
				Mollitia sequi illum labore quia quasi fugiat, 
				dolore saepe quam molestias maxime? Natus architecto debitis odit quos,
				unde voluptates, ipsam dolores quod.
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
				Mollitia sequi illum labore quia quasi fugiat, 
				dolore saepe quam molestias maxime? Natus architecto debitis odit quos,
				unde voluptates, ipsam dolores quod.
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
				Mollitia sequi illum labore quia quasi fugiat, 
				dolore saepe quam molestias maxime? Natus architecto debitis odit quos,
				unde voluptates, ipsam dolores quod.
				</p>	
			</div>
		</div>
		)
}

export default Desc;