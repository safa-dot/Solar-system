import React, { useState, useRef } from "react";
import "./header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowTurnDown } from "@fortawesome/free-solid-svg-icons";
import { Link, NavLink } from "react-router-dom";
import "animate.css";
import { motion } from "framer-motion";

// import CircleType from "circletype";

import SwiperGallery from "../Swiper/Swiper";
import { SwiperSlide } from "swiper/react";

import mercury from "../../assets/images/planet-mercury.png";
import venus from "../../assets/images/planet-venus.png";
import earth from "../../assets/images/planet-earth.png";
import mars from "../../assets/images/planet-mars.png";
import jupiter from "../../assets/images/planet-jupiter.png";
import saturn from "../../assets/images/planet-saturn.png";
import neptune from "../../assets/images/planet-neptune.png";
import uranus from "../../assets/images/planet-uranus.png";

import mercury1 from "../../assets/images/mercury1.jfif";
import mercury2 from "../../assets/images/mercury2.jfif";
import mercury3 from "../../assets/images/mercury3.jfif";
import mercury4 from "../../assets/images/mercury4.jfif";
import venus1 from "../../assets/images/venus1.jfif";
import venus2 from "../../assets/images/venus2.jfif";
import venus3 from "../../assets/images/venus3.jfif";
import venus4 from "../../assets/images/venus4.jfif";
import earth1 from "../../assets/images/earth1.jfif";
import earth2 from "../../assets/images/earth2.jfif";
import earth3 from "../../assets/images/earth3.jfif";
import earth4 from "../../assets/images/earth4.jfif";
import mars1 from "../../assets/images/mars1.jfif";
import mars2 from "../../assets/images/mars2.jfif";
import mars3 from "../../assets/images/mars3.jfif";
import mars4 from "../../assets/images/mars4.jfif";
import jupiter1 from "../../assets/images/jupiter1.jfif";
import jupiter2 from "../../assets/images/jupiter2.jfif";
import jupiter3 from "../../assets/images/jupiter3.jfif";
import jupiter4 from "../../assets/images/jupiter4.jfif";
import saturn1 from "../../assets/images/saturn1.jfif";
import saturn2 from "../../assets/images/saturn2.jfif";
import saturn3 from "../../assets/images/saturn3.jfif";
import saturn4 from "../../assets/images/saturn4.jfif";
import uranus1 from "../../assets/images/uranus1.jfif";
import uranus2 from "../../assets/images/uranus2.jfif";
import uranus3 from "../../assets/images/uranus3.jfif";
import uranus4 from "../../assets/images/uranus4.jfif";
import neptune1 from "../../assets/images/neptune1.jfif";
import neptune2 from "../../assets/images/neptune2.jfif";
import neptune3 from "../../assets/images/neptune3.jfif";
import neptune4 from "../../assets/images/neptune4.jfif";

const planets = [
	{
		name: "Mercury",
		gravity: "3.7",
		hours: "1,408",
		year: "88 Earth days",
		fact: "Mercury is the closest planet to the Sun, and the smallest planet in the solar system.",
		bigImg: mercury,
		img1: mercury1,
		img2: mercury2,
		img3: mercury3,
		img4: mercury4,
	},
	{
		name: "Venus",
		gravity: "8.87",
		hours: "5,832",
		year: "225 Earth days",
		fact: "Venus is the second planet from the Sun, and the closest planet to Earth.",
		bigImg: venus,
		img1: venus1,
		img2: venus2,
		img3: venus3,
		img4: venus4,
	},
	{
		name: "Earth",
		gravity: "9.807",
		hours: "24",
		year: "365.24 days",
		fact: "Earth is the planet that we live on, and it is the only living planet in the solar system.",
		bigImg: earth,
		img1: earth1,
		img2: earth2,
		img3: earth3,
		img4: earth4,
	},
	{
		name: "Mars",
		gravity: "3.721",
		hours: "25",
		year: "1.9 Earth years",
		fact: "Mars is the fourth planet from the Sun, between Earth and Jupiter.",
		bigImg: mars,
		img1: mars1,
		img2: mars2,
		img3: mars3,
		img4: mars4,
	},
	{
		name: "Jupiter",
		gravity: "24.79",
		hours: "10",
		year: "11.9 Earth years",
		fact: "Jupiter is the fifth planet from the Sun, and the largest planet in the solar system.",
		bigImg: jupiter,
		img1: jupiter1,
		img2: jupiter2,
		img3: jupiter3,
		img4: jupiter4,
	},
	{
		name: "Saturn",
		gravity: "10.44",
		hours: "11",
		year: "29.5 Earth years",
		fact: "Saturn is the sixth planet from the Sun, and it is the second largest planet in the solar system.",
		bigImg: saturn,
		img1: saturn1,
		img2: saturn2,
		img3: saturn3,
		img4: saturn4,
	},
	{
		name: "Uranus",
		gravity: "8.87",
		hours: "17",
		year: "84.0 Earth years",
		fact: "Uranus is the seventh planet from the Sun, and it is the third largest planet in the solar system.",
		bigImg: uranus,
		img1: uranus1,
		img2: uranus2,
		img3: uranus3,
		img4: uranus4,
	},
	{
		name: "Neptune",
		gravity: "567",
		hours: "16",
		year: "164.8 Earth years",
		fact: "Neptune is the eighth, and the farthest, planet from the Sun. It is a gas giant planet.",
		bigImg: neptune,
		img1: neptune1,
		img2: neptune2,
		img3: neptune3,
		img4: neptune4,
	},
];

function Header() {
	const [planet, setPlanet] = useState(planets[2]);

	const Name = (planet) => {
		setPlanet(planet);
	};

	// SCROLL FROM
	const ref = useRef(null);

	const handleClick = () => {
		ref.current?.scrollIntoView();
	};
	// *********

	// ANIMATION big planet****
	const planetVariants = {
		offscreen: {
			y: 0,
			x: 0,
			width: "100%",
		},
		onscreen: {
			y: 340,
			x: 0,
			width: "50%",
			opacity: 1,

			transition: {
				type: "spring",
				duration: 1,
			},
		},
	};

	return (
		<div className="container header-container ">
			<div className="row facts  justify-content-between">
				{/* PLANET NAME */}
				<div className=" col-lg-4 planet-name">
					<h1 className=" col-lg-12 ">{planet.name}</h1>

					<p className="fact col-lg-12 ">{planet.fact}</p>
				</div>

				{/* FACTS ABOUT PLANET */}
				<div className=" row col-12 col-sm-12 col-lg-8 planet-numbers ">
					<li className="col-7 col-sm-3  col-lg-4">
						<h3>{planet.gravity} m/s²</h3>
						<p>GRAVITY</p>
					</li>
					<li className="col-5 col-sm-4  col-lg-3">
						<h3>{planet.hours} hours</h3>
						<p>DAILY HOUR</p>
					</li>
					<li className="col-12 col-sm-5  col-lg-5">
						<h3>{planet.year}</h3>
						<p>YEAR LENGTH</p>
					</li>
				</div>
			</div>

			<div className="row gallery">
				{/* LINK TO THE CONTENT ABOUT THE PLANET */}
				<div className=" col-lg-2 text-center learn-more d-flex align-items-start d-none d-lg-block">
					<Link to={planet.name} onClick={handleClick}>
						More of {planet.name}
						<FontAwesomeIcon
							className="ps-3 pt-2 "
							icon={faArrowTurnDown}
							size="x"
						/>
					</Link>
				</div>
				{/* ************************************************ */}
				<div className="col-sm-12 col-lg-7 planets text-center  card">
					{/* PLANET BIG IMAGE */}

					<motion.div
						className="col-sm-12 col-lg-12 image-container"
						initial={planetVariants.offscreen}
						whileInView={planetVariants.onscreen}
						viewport={{ once: false, amount: 0.8 }}
					>
						<img
							className=" planet-img card-img  col-lg-10  "
							src={planet.bigImg}
							alt=""
						/>
					</motion.div>
					{/* PLANETS NAMES */}
					<div className=" planets-names card-img-overlay ">
						{planets.map((planet) => (
							<NavLink
								exact="true"
								activeclassName="active"
								to={planet.name}
								className="planet-btn  pe-3"
								onClick={() => {
									Name(planet);
								}}
								key={planet}
							>
								{planet.name}
							</NavLink>
						))}
					</div>
				</div>
				{/* PLANET GALLERY */}
				<div className="col-lg-3 ">
					<SwiperGallery>
						<SwiperSlide>
							<img src={planet.img1} alt={planet.name} />
						</SwiperSlide>
						<SwiperSlide>
							<img src={planet.img2} alt={planet.name} />
						</SwiperSlide>
						<SwiperSlide>
							<img src={planet.img3} alt={planet.name} />
						</SwiperSlide>
						<SwiperSlide>
							<img src={planet.img4} alt={planet.name} />
						</SwiperSlide>
					</SwiperGallery>
				</div>
			</div>

			<div className="content-section">
				{/* scroll to */}
				<div
					ref={ref}
					style={{
						height: 50,
						width: 50,
						position: "absolute",
						bottom: 150,
					}}
				></div>
			</div>
		</div>
	);
}

export default Header;
