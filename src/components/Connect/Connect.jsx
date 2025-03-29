import React from 'react';
import Image from 'next/image';
import {ConnectFeatures} from '@/src/Utils/data';
import {motion} from 'framer-motion';
import {containerVariants, descVariants, tagVariants, titleVariants} from '@/src/Utils/animation';
import './Connect.css';

const Connect = () => {
	return (
		<div className='c-wrapper'>
			<div className='container'>
				<div className='c-container'>

					{/* Head */}
					<div className='c-head'>
						<motion.span 
						variants={tagVariants}
						initial='offscreen'
						whileInView={'onscreen'}
						className='tag'>Connect With Us</motion.span>
						<motion.span 
						initial='offscreen'
						whileInView={'onscreen'}
						variants={titleVariants}
						className='c-latest'>For The Latest<br className='c-break'/> Superklok Labs Releases</motion.span>
						<motion.span 
						initial='offscreen'
						whileInView={'onscreen'}
						variants={descVariants}
						className='c-text'>Our mission is to level the playing field for aspiring coders and musicians. We make sure talented individuals have all the premium self-serve resources they need to make their own music or code an app. All repositories, containers &
						<a
							target='_blank'
							className='c-link'
							href='https://superklok.com/'
						> Superklok Music Tracks </a>are available to everyone free of charge.</motion.span>
					</div>

					{/* Features */}
					<div className='c-features'>
						{
							ConnectFeatures.map((feature, i)=> (
								<motion.div 
								initial='offscreen'
								whileInView='onscreen'
								variants={containerVariants((i+1)*0.1)}
								key={i} 
								className='c-feature'>
									<a target='_blank' href={feature.link}>
										<Image 
										className='c-icon'
										src={feature.icon} 
										alt='feature' 
										width={128} 
										height={128}/>
									</a>
									<a className='c-title' target='_blank' href={feature.link}>{feature.title}</a>
									<span className='text'>{feature.desc}</span>
								</motion.div>
							))
						}
					</div>
				</div>
			</div>
		</div>
	)
}

export default Connect;