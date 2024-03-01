'use client'

import React, {useState} from 'react';
import {BiMenuAltRight} from 'react-icons/bi';
import {RxCross2} from 'react-icons/rx';
import {useMotionValueEvent, useScroll} from 'framer-motion';
import {Link} from 'react-scroll';
import './Navbar.css';

export const Navbar = () => {
	const [mobileMenuOpened, setMobileMenuOpened] = useState(false);
	const [navStyle, setNavStyle] = useState('');
	const {scrollYProgress} = useScroll();
	useMotionValueEvent(scrollYProgress, 'change', (latest) => {
		if (latest > 0.2) {
			setNavStyle('sticky');
		} else {
			setNavStyle('');
		}
	});

	return (
		<div className={`n-wrapper ${navStyle}`}>

			{/* Desktop Version */}
			<div className='container'>
				<div className='n-container'>
					{/* Left Side */}
					<div className='n-logo'>
						<Link to='l-wrapper' spy={true} smooth={true}>
							<span>Superklok Labs</span>
						</Link>
					</div>

					{/* Right Side */}
					<div className='n-right'>
						<div className='n-menu'>
							<Link to='s-wrapper' spy={true} smooth={true}>
								<span>Services</span>
							</Link>
							<Link to='dop-wrapper' spy smooth offset={100}>
								<span>DevOps</span>
							</Link>
							<Link to='a-wrapper' spy smooth>
								<span>About</span>
							</Link>
							<Link to='oc-wrapper' spy smooth offset={100}>
								<span>Containers</span>
							</Link>
						</div>
					</div>
				</div>
			</div>

			{/* Mobile Version */}
			<div className='nm-container'>
				{/* Logo */}
				<Link
					onClick={() => setMobileMenuOpened(false)}
					to='l-wrapper'
					spy={true}
					smooth={true}>
						<span>Superklok Labs</span>
				</Link>
				

				{/* Menu Icon */}
				{
					!mobileMenuOpened ?
					<BiMenuAltRight
					size={30}
					cursor={'pointer'}
					onClick={()=>setMobileMenuOpened(true)}
					/> : <RxCross2 size={30} 
					cursor={'pointer'}
					onClick={()=>setMobileMenuOpened(false)}
					/>
				}
				
				{/* Mobile Menu */}
				<div className='nm-menu'
				style={{transform: mobileMenuOpened && 'translate(0%)'}}
				>
					<Link
					onClick={() => setMobileMenuOpened(false)}
					to='s-wrapper'
					spy={true}
					smooth={true}>
						<span>Services</span>
					</Link>
					<Link
					onClick={() => setMobileMenuOpened(false)}
					to='dop-wrapper'
					spy
					smooth
					offset={100}>
						<span>DevOps</span>
					</Link>
					<Link
					onClick={() => setMobileMenuOpened(false)}
					to='a-wrapper'
					spy
					smooth>
						<span>About</span>
					</Link>
					<Link
					onClick={() => setMobileMenuOpened(false)}
					to='oc-wrapper'
					spy
					smooth
					offset={100}>
						<span>Containers</span>
					</Link>
				</div>
			</div>
		</div>
	)
}
