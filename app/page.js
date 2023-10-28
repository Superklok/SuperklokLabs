'use client'

import {Navbar} from '@/src/components/Navbar/Navbar';
import Landing from '@/src/components/Landing/Landing';
import PromoVid from '@/src/components/PromoVid/PromoVid';
import OurServices from '@/src/components/OurServices/OurServices';
import Connect from '@/src/components/Connect/Connect';
import DevOps from '@/src/components/DevOps/DevOps';
import {motion, useAnimation} from 'framer-motion';
import './page.css';

export default function Home() {
	const controls = useAnimation();

	return (
		<motion.div className='app' animate={controls}>
			<Navbar/>
			<Landing/>
			<PromoVid/>
			<OurServices/>
			<motion.div
			onViewportEnter={()=> controls.start({
				backgroundColor: 'var(--secondary-color)'
			})}
			onViewportLeave={()=> controls.start({
				backgroundColor: 'var(--background)'
			})}
			viewport={{amount: 0.4}}
			>
				<Connect/>
			</motion.div>
			<DevOps/>
		</motion.div>
	);
}
