'use client'

import React from 'react';
import './OurServices.css';
import {Services} from '@/src/Utils/data';
import Image from 'next/image';
import {motion} from 'framer-motion';
import {containerVariants, descVariants, tagVariants, titleVariants} from '@/src/Utils/animation';

const OurServices = () => {
	return (
		<div className='s-wrapper'>
			<div className='container'>
				<div className='s-container'>

					{/* Section Head */}
					<div className='s-head'>
						<motion.span 
						initial='offscreen'
						whileInView={'onscreen'}
						variants={tagVariants}
						className='tag'>Services</motion.span>
						<motion.span 
						initial='offscreen'
						whileInView={'onscreen'}
						variants={titleVariants}
						className='title'>
							{''}
							Applying innovative conceptualization to music production, web design & custom luxury PC builds.
						</motion.span>
						<motion.span 
						initial='offscreen'
						whileInView={'onscreen'}
						variants={descVariants}
						className='desc'>Here's how we take care of business:</motion.span>
					</div>

					{/* Service Sections */}
					<div className='s-sections'>

						{/* First Section */}
						<div className='s-section'>
							<motion.span 
							initial='offscreen'
							whileInView={'onscreen'}
							variants={titleVariants}
							className='sec-title'>Web Design</motion.span>
							<motion.span 
							initial='offscreen'
							whileInView={'onscreen'}
							variants={descVariants}
							className='text'>Sophisticated apps that stand out.</motion.span>
							<div className='s-services'>
								{
									Services.slice(0,3).map((Service, i)=> (
										<motion.div 
										initial='offscreen'
										whileInView='onscreen'
										variants={containerVariants((i+1)*0.1)}
										className='s-service' 
										key={i}>
											<Image 
											className='s-icon'
											src={Service.icon} 
											alt='service' 
											width={60} 
											height={60}/>
											<span>{Service.title}</span>
										</motion.div>
									))
								}
							</div>
						</div>

						{/* Second Section */}
						<div className='s-section'>
							<motion.span 
							initial='offscreen'
							whileInView={'onscreen'}
							variants={titleVariants}
							className='sec-title'>Music Production</motion.span>
							<motion.span 
							initial='offscreen'
							whileInView={'onscreen'}
							variants={descVariants}
							className='text'>Original music & promotional content.</motion.span>
							<div className='s-services'>
								{
									Services.slice(3,6).map((Service, i)=> (
										<motion.div 
										initial='offscreen'
										whileInView='onscreen'
										variants={containerVariants((i+1)*0.1)}
										className='s-service'
										key={i}>
											<Image 
											className='s-icon'
											src={Service.icon} 
											alt='service' 
											width={60} 
											height={60}/>
											<span>{Service.title}</span>
										</motion.div>
									))
								}
							</div>
						</div>
					</div>

					{/* Custom PC Section */}
					<motion.div 
					initial='offscreen'
					whileInView='onscreen'
					variants={containerVariants(0.3)}
					className='s-customPC'>

						{/* Left Side */}
						<div>
							<span className='sec-title'>Custom Luxury PC Builds</span>
							<span className='desc'>We only procure the finest PC parts and each of our unique custom builds are engineered using extremely meticulous care.</span>
						</div>

						{/* Right Side */}
						<div>
							<span className='text'>
								Whether you're looking for a powerful gaming rig or an ultra-silent server, we specialize in conceptualizing and crafting the perfect solution to meet your specific requirements.
							</span>
							<span className='text'>
								It starts with sourcing high-end components from across the globe then assembling them using experienced engineering techniques to create bleeding-edge custom PCs which always surpass client expectations.
							</span>
						</div>
					</motion.div>
				</div>
			</div>
		</div>
			
	);
}

export default OurServices;