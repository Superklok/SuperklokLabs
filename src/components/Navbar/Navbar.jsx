'use client'

import React, {useState} from 'react';
import './Navbar.css';
import {BiMenuAltRight} from 'react-icons/bi';
import {RxCross2} from 'react-icons/rx';

export const Navbar = () => {
	const [mobileMenuOpened, setMobileMenuOpened] = useState(false);

	return (
		<div className='n-wrapper'>

			{/* Desktop Version */}
			<div className="container">
				<div className="n-container">
					{/* Left Side */}
					<div className="n-logo">
						<span>Superklok Labs</span>
					</div>

					{/* Right Side */}
					<div className="n-right">
						<div className="n-menu">
							<span>Services</span>
							<span>DevOps</span>
							<span>About</span>
							<span>Containers</span>
						</div>
					</div>
				</div>
			</div>

			{/* Mobile Version */}
			<div className="nm-container">
				{/* Logo */}
				<span>Superklok Labs</span>

				{/* Menu Icon */}
				{
					!mobileMenuOpened ?
					<BiMenuAltRight
					size={30}
					onClick={()=>setMobileMenuOpened(true)}
					/> : <RxCross2 size={30} 
					onClick={()=>setMobileMenuOpened(false)}
					/>
				}
				
				{/* Mobile Menu */}
				<div className="nm-menu"
				style={{transform: mobileMenuOpened && 'translate(0%)'}}
				>
					<span>Services</span>
					<span>DevOps</span>
					<span>About</span>
					<span>Containers</span>
				</div>
			</div>
		</div>
	)
}
