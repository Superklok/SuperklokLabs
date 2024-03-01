import React from 'react';
import Slider from 'react-slick';
import Image from 'next/image';
import { ContainerData } from '@/src/Utils/data';

const SlickSlider = () => {
	const [currentSlide, setCurrentSlide] = React.useState(0);

	const renderPaginationNumbers = () => {
		const paginationNumbers = [];

		paginationNumbers.push(
			<li
				key={0}
				className={currentSlide === 0 ? 'active' : ''}
				onClick={() => slider.slickGoTo(0)}
			>
				1
			</li>
		);

		for (let i = 1; i < ContainerData.length - 1; i++) {
			if (
				i >= currentSlide - Math.floor(settings.slidesToShow / 2) &&
				i <= currentSlide + Math.floor(settings.slidesToShow / 2)
			) {
				paginationNumbers.push(
					<li
						key={i}
						className={currentSlide === i ? 'active' : ''}
						onClick={() => slider.slickGoTo(i)}
					>
						{i + 1}
					</li>
				);
			} else if (
				i === currentSlide - Math.floor(settings.slidesToShow / 2) - 1 ||
				i === currentSlide + Math.floor(settings.slidesToShow / 2) + 1
			) {
			paginationNumbers.push(
				<li key={i} className="ellipsis">
					...
				</li>
			);
		}
	}

	paginationNumbers.push(
		<li
			key={ContainerData.length - 1}
			className={currentSlide === ContainerData.length - 1 ? 'active' : ''}
			onClick={() => slider.slickGoTo(ContainerData.length - 1)}
		>
			{ContainerData.length}
		</li>
	);

	return paginationNumbers;
};

const settings = {
	dots: false,
	infinite: true,
	speed: 1000,
	slidesToShow: 3,
	slidesToScroll: 1,
	initialSlide: 0,
	touchMove: true,
	useCSS: true,
	appendDots: (dots) => (
		<div
			style={{
				backgroundColor: '#ddd',
				borderRadius: '10px',
				padding: '10px',
			}}
		>
			<ul style={{ margin: '0px' }}>{dots}</ul>
		</div>
	),
	customPaging: (i) => (
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
		breakpoint: 768,
		settings: {
			slidesToShow: 1,
			slidesToScroll: 1,
		},
	},
	],
	afterChange: (current) => {
		setCurrentSlide(current);
	},
};

let slider;

return (
	<div>
		<Slider ref={(c) => (slider = c)} {...settings}>
			{ContainerData.map((container, i) => (
				<div key={i} className="slide-container">
					{/* Top Half */}
					<div className="slide-top">
						<div className="slide-title">{container.title}</div>
						<Image
							className="oc-screenshot"
							alt="screenshot"
							width={300}
							height={169}
							src={container.icon}
						/>
						<span className="desc">{container.desc}</span>
					</div>
					{/* Bottom Half */}
					<div className="slide-bottom">
						<div className="slide-docker">
							<a target="_blank" href={container.docker}>
								<Image
									alt="docker"
									width={90}
									height={90}
									src={container.dockerImg}
								/>
							</a>
						</div>
						<div className="slide-github">
							<a target="_blank" href={container.github}>
								<Image
									alt="github"
									width={90}
									height={90}
									src={container.githubImg}
								/>
							</a>
						</div>
					</div>
				</div>
			))}
		</Slider>

		<ul className="pagination-numbers">{renderPaginationNumbers()}</ul>
	</div>
	);
};

export default SlickSlider;