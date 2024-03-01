import React from 'react';
import Image from 'next/image';
import PromoButton from '../PromoButton/PromoButton';
import './Footer.css';

const Footer = () => {
	return (
		<div className='f-wrapper'>
			<div className="container">
				<div className="f-container">
					<span className='f-promo'>Ace coding interviews with this</span>
					<div className='f-button'>
						<PromoButton/>
					</div>
					<div className='f-icon'>
						<a target='_blank' href='https://superklok.com/'>
							<Image 
							src='/superklok.png'
							width={315} 
							height={75}
							alt='superklok'/>
						</a>
					</div>
					<span className='text'>Copyright {(new Date().getFullYear())} Superklok Labs</span>
				</div>
			</div>
		</div>
	)
}

export default Footer;