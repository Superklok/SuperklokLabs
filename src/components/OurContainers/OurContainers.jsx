import React from 'react';
import SlickSlider from './SlickSlider';
import {motion} from 'framer-motion';
import {descVariants, tagVariants, titleVariants} from '@/src/Utils/animation';
import './OurContainers.css';

const OurContainers = () => {
	return (
		<div className='oc-wrapper'>
			<div className='container'>
				<div className='oc-container'>
					<div className='oc-head'>
						<motion.span 
						variants={tagVariants}
						initial='offscreen'
						whileInView={'onscreen'}
						className='tag'>Containers</motion.span>
						<motion.span 
						initial='offscreen'
						whileInView={'onscreen'}
						variants={titleVariants}
						className='title'>Take a peek at our experiments!</motion.span>
						<motion.span 
						initial='offscreen'
						whileInView={'onscreen'}
						variants={descVariants}
						className='desc'>Download them for FREE</motion.span>
					</div>
				</div>

				{/* Slick Slider */}
				<motion.div
				variants={tagVariants}
				initial='offscreen'
				whileInView={'onscreen'}>
					<SlickSlider/>
				</motion.div>
			</div>
		</div>
	)
}

export default OurContainers;