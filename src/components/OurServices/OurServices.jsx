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
						className='s-secondary'>
							{''}
							Applying innovative conceptualization to <br></br> Cloud Engineering,
							<a
								target='_blank'
								className='s-linkGlow'
								href='https://www.pond5.com/artist/superklok'
							> Music Production </a>& Creative Services
						</motion.span>
						<motion.span 
						initial='offscreen'
						whileInView={'onscreen'}
						variants={descVariants}
						className='s-desc'>Here's how we take care of business:</motion.span>
					</div>

					{/* Service Sections */}
					<div className='s-sections'>

						{/* First Section */}
						<div className='s-section'>
							<motion.span 
							initial='offscreen'
							whileInView={'onscreen'}
							variants={titleVariants}
							className='s-title'>Cloud Engineering</motion.span>
							<motion.span 
							initial='offscreen'
							whileInView={'onscreen'}
							variants={descVariants}
							className='s-text s-limit'>Digital Products & <br className='s-break'/> IT Consultation</motion.span>
							<div className='s-services'>
								{
									Services.slice(0,3).map((Service, i)=> (
										<motion.div 
										initial='offscreen'
										whileInView='onscreen'
										variants={containerVariants((i+1)*0.1)}
										className='s-service' 
										key={i}>
											<a target='_blank' href={Service.link}>
												<Image 
												className='s-icon'
												src={Service.icon} 
												alt='service' 
												width={60} 
												height={60}/>
											</a>					
											<a className='s-link' target='_blank' href={Service.link}>{Service.title}</a>
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
							className='s-title'>Music Production</motion.span>
							<motion.span 
							initial='offscreen'
							whileInView={'onscreen'}
							variants={descVariants}
							className='s-text s-limit'>
								<a
									target='_blank'
									className='s-linkGlow'
									href='https://www.pond5.com/artist/superklok'
								>Music,</a> Videos & <br className='s-break'/> Graphic Design</motion.span>
							<div className='s-services'>
								{
									Services.slice(3,6).map((Service, i)=> (
										<motion.div 
										initial='offscreen'
										whileInView='onscreen'
										variants={containerVariants((i+1)*0.1)}
										className='s-service'
										key={i}>
											<a target='_blank' href={Service.link}>
												<Image 
												className='s-icon'
												src={Service.icon} 
												alt='service' 
												width={60} 
												height={60}/>
											</a>				
											<a className='s-link' target='_blank' href={Service.link}>{Service.title}</a>
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
							<span className='s-title'>Creative Studio Services</span>
							<span className='s-text s-left'>We create the finest 100% Commercially Usable bespoke AI Automation Solutions, engineered using extremely meticulous research and care.</span>
						</div>

						{/* Right Side */}
						<div>
							<span className='s-text'>
								Whether you'd like to convert simple MS Paint sketches into breathtaking masterpieces with ComfyUIcharacter, or generate eye-catching ad campaigns using ComfyUImarketing, we'll craft the perfect solution for you.
							</span>
							<span className='s-text'>
								It starts with sourcing pristine, 100% Commercially Safe training assets then assembling them using experienced ComfyUI techniques to create bleeding-edge generative workflows that stand out from the rest!
							</span>
						</div>
					</motion.div>
				</div>
			</div>
		</div>
			
	);
}

export default OurServices;