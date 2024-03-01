import React from 'react';
import Image from 'next/image';
import './PromoButton.css';

const PromoButton = () => {
	return (
		<div>		
			{/* Button Text */}
			<a 
			className='p-link'
			target='_blank'
			href='https://github.com/Superklok/LearnJavaScript'>
				<div className='p-container'>
					<span>FREE JavaScript Course</span>

					{/* Superklok Icon */}
					<Image 
					className='p-icon'
					src='/PromoButton/SuperklokIcon.jpg' 
					alt='FREE JavaScript Course' 
					width={55} 
					height={55}/>
				</div>
			</a>
		</div>
	);
}

export default PromoButton;