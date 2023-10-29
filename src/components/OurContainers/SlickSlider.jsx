import React from 'react';
import Slider from 'react-slick';
import Image from 'next/image';
import {ContainerData} from '@/src/Utils/data';

const SlickSlider = () => {
	const settings = {
		dots: true,
		infinite: true,
		speed: 1000,
		slidesToShow: 3,
		slidesToScroll: 1,
		initialSlide: 0,
		touchMove: true,
		useCSS: true,
		customPaging: i => (
			<div
				style={{
					width: '24px',
					fontSize: '1.5rem',
					color: '#FFF',
					borderRadius: '10px',
					border: '1px white solid',
				}}
			>
				{i + 1}
			</div>
			),
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3,
					infinite: true,
					dots: true,
				},
			},
			{
				breakpoint: 1000,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
					initialSlide: 2,
				},
			},
			{
				breakpoint: 786,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				},
			},
		],
	}

	return (
		<div>
			<Slider {...settings}>
				{
					ContainerData.map((container, i)=> (
						<div key={i} className='slide-container'>

							{/* Top Half */}
							<div className='slide-top'>
								<div className='slide-title'>{container.title}</div>
								<Image 
								className='oc-screenshot'
								alt='screenshot'
								width={300}
								height={169}
								src={container.icon}/>
								<span className='desc'>{container.desc}</span>
							</div>

							{/* Bottom Half */}
							<div className='slide-bottom'>
								<div className='slide-docker'>
									<a href={container.docker}>
										<Image 
										alt='docker'
										width={90}
										height={90}
										src={container.dockerImg}/>
									</a>
								</div>	
								<div className='slide-github'>
									<a href={container.github}>
										<Image 
										alt='github'
										width={90}
										height={90}
										src={container.githubImg}/>
									</a>
								</div>
							</div>
						</div>
					))
				}
			</Slider>
		</div>
	)
}

export default SlickSlider;