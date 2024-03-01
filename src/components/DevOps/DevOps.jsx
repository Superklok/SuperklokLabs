import React from 'react';
import Image from 'next/image';
import {motion} from 'framer-motion';
import {DevOpsFeatures} from '@/src/Utils/data';
import {tagVariants, titleVariants} from '@/src/Utils/animation';
import './DevOps.css';

const DevOps = () => {
	const featureVariants = {
		offscreen: {
			scale: 0.5,
		},
		onscreen: {
			scale: 1,
			transition: {
				type: 'spring',
				duration: 1.5,
			},
		},
	}

	return (
		<div className='dop-wrapper'>
			<div className='container'>
				<div className='dop-container'>

					{/* Head */}
					<div className='dop-head'>
						<motion.span 
						variants={tagVariants}
						initial='offscreen'
						whileInView={'onscreen'}
						className='tag'>DevOps</motion.span>
						<motion.span
						variants={titleVariants}
						initial='offscreen'
						whileInView={'onscreen'}
						className='title'>High velocity app & service delivery</motion.span>
					</div>

					<div className='dop-features'>
						{
							DevOpsFeatures.map((feature, i)=> (
								<motion.div
								variants={featureVariants}
								initial='offscreen'
								whileInView={'onscreen'} 
								className='dop-feature' 
								key={i}>

									{/* Left Side */}
									<motion.div 
									initial={{opacity: 0, x: -100}}
									whileInView={{
										opacity: 1,
										x: 0,
										transition: {
											type: 'easeIn',
											duration: 1,
											delay: 0.7,
										}
									}}
									className='detail'>
										<a className='sec-title dop-link' target='_blank' href={feature.link}>{feature.title}</a>
										<span className='text'>{feature.desc}</span>
									</motion.div>

									{/* Right Side */}
									<div className='icon'>
										<a target='_blank' href={feature.link}>
											<Image 
											src={feature.icon} 
											width={128} 
											height={128}
											alt='feature'
											style={{translate: '50% orem'}}/>
										</a>
									</div>
								</motion.div>
							))
						}
					</div>
				</div>
			</div>
		</div>
	)
}

export default DevOps;