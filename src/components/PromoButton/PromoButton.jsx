import React from 'react';
import Image from 'next/image';
import './PromoButton.css';

const PromoButton = () => {
	return (
		<div className='p-container'>

			{/* Button Text */}
			<a 
			className='p-link'
			target='_blank'
			href='https://github.com/Superklok/LearnJavaScript'>
				FREE JavaScript Course
			</a>

			{/* Superklok Icon */}
			<a
			target='_blank'
			href='https://github.com/Superklok/LearnJavaScript'>
				<Image 
				className='p-icon'
				src='/PromoButton/SuperklokIcon.jpg' 
				alt='FREE JavaScript Course' 
				width={55} 
				height={55}/>
			</a>
		</div>
	);
}

export default PromoButton;