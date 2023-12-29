'use client'

import React from 'react';
import PromoButton from '../PromoButton/PromoButton';
import {LandingData} from '@/src/Utils/data';
import {motion} from 'framer-motion';
import './Landing.css';

const Landing = () => {
	const variants = (delay) => ({
		initial: {
			y: '18rem',
		},
		animate: {
			y: '0rem',
			transition: {
				type: 'spring',
				damping: 25,
				duration: 2.5,
				delay,
			}
		}
	});

	const imgVariants = () => ({
		initial: {
			y: '18rem',
		},
		animate: {
			y: '0rem',
			transition: {
				type: 'spring',
				duration: 2,
				stiffness: 30,
			}
		}
	});

	return (
		<div className='l-wrapper'>
			<div className='container'>
				<div className='l-container'>
					{/* Left Side */}
					<div className='l-left'>
						<div className='image-row'>
							{
								LandingData.slice(0, 3).map((track, i)=> (
									<div className='track-pill' key={i}>
										<motion.div
										initial={'initial'}
										animate={'animate'}
										variants={variants(track.delay)}
										style={{backgroundColor: track.bg}}
										className='track-pill-bg'>
											<a target='_blank' href={track.link}>
												<motion.img 
												initial={'initial'}
												animate={'animate'}
												variants={imgVariants()}
												src={track.src} 
												alt={track.src} />
											</a>
										</motion.div>
									</div>
								))
							}
						</div>
						<div className='image-row'>
							{
								LandingData.slice(3, 6).map((track, i)=> (
									<div className='track-pill' key={i}>
										<motion.div
										initial={'initial'}
										animate={'animate'}
										variants={variants(track.delay)}
										style={{backgroundColor: track.bg}}
										className='track-pill-bg'>
											<a target='_blank' href={track.link}>
												<motion.img 
												initial={'initial'}
												animate={'animate'}
												variants={imgVariants()}
												src={track.src} 
												alt={track.src} />
											</a>
										</motion.div>
									</div>
								))
							}
						</div>
					</div>

					{/* Right Side */}
					<div className='l-right'>
						<div className='l-title'>
							<span>DevOps Engineering</span>
							<span>& Music Production</span>
							<span>Going Gangbusters!!</span>
						</div>
						<div className='l-desc'>
							An IT consulting firm that specializes in JavaScript, DevOps, French/English translation, and music production.
						</div>
						<div className='l-promo'>
							Ace coding interviews with this
						</div>
						<PromoButton/>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Landing;