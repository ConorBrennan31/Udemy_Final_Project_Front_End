import React from 'react';
import Tilt from 'react-tilt';
import './logo.css';
import logo from './logo.png';

const Logo = ({ onRouteChange }) => {
	return (
		<div className='ma4 mt0'>
			<Tilt className="Tilt shadow-1" options={{ max : 45 }} style={{ height: 150, width: 150 }} >
 				<div className="Tilt-inner pa4"> 
 					<img src={logo} alt="logo" onclick={() => onRouteChange('home')}/> 
 				</div>
			</Tilt>
		</div>

	);
}

export default Logo;