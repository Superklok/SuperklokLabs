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
				<motion.video 
				ref={ref}
				className='pv-video'
				loop 
				muted 
				autoPlay 
				controls=''
				style={{scale}}>
					<source src="/video.mp4" type='video/mp4'/>
				</motion.video>
			</din>
		</div>
	);
}

export default PromoVid;