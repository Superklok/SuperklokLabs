import React from 'react';
import Image from 'next/image';
import './Footer.css';

const Footer = () => {
	return (
		<div className='f-wrapper'>
			<div className="container">
				<div className="f-container">
					<a href='https://superklok.com/'>
						<Image 
						className='f-icon'
						src='/superklok.png'
						width={315} 
						height={75}
						alt='superklok'/>
					</a>
					<span className='text'>Copyright {(new Date().getFullYear())} Superklok Labs</span>
				</div>
			</div>
		</div>
	)
}

export default Footer;