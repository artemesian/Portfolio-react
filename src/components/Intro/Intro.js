import React from 'react';
import "./Intro.css";
import Potrait from "../../assets/potrait.png";
import Resume from "../../assets/Diepe Angelo CV.pdf";

export default class Intro extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="intro-container">
				<div className="intro-wrapper">
					<img src={Potrait} alt="potrait" id="potrait"/>
					<p id="intro-text">Hi,I'm Angelo <br/>A FullStack Javascript Developer</p>
					<a href={Resume} id="download-resume">Get Resume</a>
				</div>
		</div>
		);
	}
}
