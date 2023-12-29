import React from 'react';
import {motion} from 'framer-motion';
import {AboutUs} from '@/src/Utils/data';
import {containerVariants, tagVariants, titleVariants} from '@/src/Utils/animation';
import './About.css';

const About = () => {
	return (
		<div className='a-wrapper'>
			<div className='container'>
				<div className='a-container'>

					{/* Left Side */}
					<div className='a-left'>
						<div className='head'>
							<motion.span 
							variants={tagVariants}
							initial='offscreen'
							whileInView={'onscreen'}
							className='tag'>About</motion.span>
							<motion.span 
							variants={titleVariants}
							initial='offscreen'
							whileInView={'onscreen'}
							className='title'>
								{''}
								The company & answers <br/> to all your questions</motion.span>
						</div>

						{/* features */}
						<div className="a-features">
							{
								AboutUs.map((feature, i)=> (
									<motion.div 
									variants={containerVariants(i * 0.05 + 1)}
									initial='offscreen'
									whileInView={'onscreen'}
									className='a-feature' 
									key={i}>
										<span className='desc'>{feature.title}</span>
										<span className='text'>{feature.desc}
											<a
												className='a-link'
												href='mailto:info@superklok.com'
											>{feature.info}</a>
												{feature.desc2}
											<a
												className='a-link'
												href='mailto:sales@superklok.com'
											>{feature.sales}</a>
												{feature.desc3}
										</span>
									</motion.div>
								))
							}
						</div>
					</div>

					{/* Right Side */}
					<div className='a-right'>
						<motion.video 
						variants={containerVariants(0.5)}
						initial='offscreen'
						whileInView={'onscreen'}
						className='a-video'
						loop
						muted
						autoPlay
						controls=''
						webkit-playsInline
						playsInline>
							<source src='/contact.mp4' type='video/mp4'/>
						</motion.video>
					</div>
				</div>
			</div>
		</div>
	)
}

export default About;