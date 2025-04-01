'use client'

import React, {useRef} from 'react';
import {motion, useScroll, useTransform} from 'framer-motion';
import './PromoVid.css';

const PromoVid = () => {
	const ref = useRef(null);
	const {scrollYProgress} = useScroll({
		target: ref,
		offset: ['start end', 'end end']
	});
	const scale = useTransform(scrollYProgress, [0,1], [0.6, 1]);

	return (
		<div className='pv-container'>
			<din className='container'>
				<a
					target='_blank'
					href='https://youtu.be/fHx-4ip4iqU'
				>
					<motion.video 
					ref={ref}
					className='pv-video'
					loop 
					muted 
					autoPlay 
					controls=''
					webkit-playsInline
					playsInline
					style={{scale}}>
						<source src='/promo.mp4' type='video/mp4'/>
					</motion.video>
				</a>
			</din>
		</div>
	);
}

export default PromoVid;