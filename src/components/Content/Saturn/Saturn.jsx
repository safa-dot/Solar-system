import React from "react";
import "../contentStyle.css";
import { motion } from "framer-motion";
import PlanetsSeparator from "../PlanetsSeparator";

function Saturn() {
	const fadeAnime = {
		offscreen: {
			opacity: 0,
		},
		onscreen: {
			opacity: 1,
			transition: {
				type: "spring",
				duration: 4,
			},
		},
	};

	return (
		<div className="container content-container">
			<div className="row ">
				<motion.div
					initial={fadeAnime.offscreen}
					whileInView={fadeAnime.onscreen}
					viewport={{ once: false, amount: 0.8 }}
					className=" text-zone col-lg-6 offset-lg-6"
				>
					<p>
						Saturn is the sixth planet from the Sun and the second-largest
						planet in our solar system.
					</p>
					<p>
						Adorned with thousands of beautiful ringlets, Saturn is unique among
						the planets. It is not the only planet to have rings – made of
						chunks of ice and rock – but none are as spectacular or as
						complicated as Saturn's.
					</p>
					<p>
						Like fellow gas giant Jupiter, Saturn is a massive ball made mostly
						of hydrogen and helium.
					</p>
				</motion.div>
			</div>

			<div className="row pt-5 planet-facts">
				<div className="row text-center ">
					<h1 className="pb-5">SIX things to know About Saturn</h1>
				</div>
				{/* ********************************************************************* */}

				<div className="col-lg-5 ">
					<motion.div
						className="fact1 col-lg-12 text-end pt-5"
						initial={fadeAnime.offscreen}
						whileInView={fadeAnime.onscreen}
						viewport={{ once: true, amount: 0.8 }}
					>
						<h3>IN DIM LIGHT</h3>
						<p>
							Saturn is the sixth planet from our Sun (a star) and orbits at a
							distance of about 886 million miles (1.4 billion kilometers) from
							the Sun.
						</p>
					</motion.div>

					<motion.div
						className="fact2 col-lg-12 text-end pt-5"
						initial={fadeAnime.offscreen}
						whileInView={fadeAnime.onscreen}
						viewport={{ once: false, amount: 0.8 }}
					>
						<h3>SHORT DAY, LONG YEAR</h3>
						<p>
							Saturn takes about 10.7 hours (no one knows precisely) to rotate
							on its axis once—a Saturn “day”—and 29 Earth years to orbit the
							sun.
						</p>
					</motion.div>

					<motion.div
						className="fact3 col-lg-12  text-end pt-5"
						initial={fadeAnime.offscreen}
						whileInView={fadeAnime.onscreen}
						viewport={{ once: false, amount: 0.8 }}
					>
						<h3>HOT AIR</h3>
						<p>
							Saturn's atmosphere is made up mostly of hydrogen (H2) and helium
							(He).
						</p>
					</motion.div>
				</div>
				{/* *****************************MIDDLE ICONS PLANETS**************************************** */}
				<div className="col-lg-1 d-none d-lg-block">
					<PlanetsSeparator />
				</div>
				{/* ********************************************************************* */}
				<div className="col-lg-5  ">
					<motion.div
						className="fact4 col-lg-12  text-start"
						initial={fadeAnime.offscreen}
						whileInView={fadeAnime.onscreen}
						viewport={{ once: false, amount: 0.8 }}
					>
						<h3>MASSIVE WORLD, LIGHT ELEMENTS</h3>
						<p>
							Jupiter's atmosphere is made up mostly of hydrogen (H2) and helium
							(He).
						</p>
					</motion.div>

					<motion.div
						className="fact5 col-lg-12 pt-5 text-start"
						initial={fadeAnime.offscreen}
						whileInView={fadeAnime.onscreen}
						viewport={{ once: false, amount: 0.8 }}
					>
						<h3>MINI SOLAR SYSTEM</h3>
						<p>
							Saturn has 53 known moons with an additional 29 moons awaiting
							confirmation of their discovery—that is a total of 82 moons.
						</p>
					</motion.div>
					<motion.div
						className="fact6 col-lg-12 pt-5 text-start"
						initial={fadeAnime.offscreen}
						whileInView={fadeAnime.onscreen}
						viewport={{ once: false, amount: 0.8 }}
					>
						<h3>RARE DESTINATION</h3>
						<p>
							Few missions have visited Saturn: Pioneer 11 and Voyagers 1 and 2
							flew by; But Cassini orbited Saturn 294 times from 2004 to 2017.
						</p>
					</motion.div>
				</div>
			</div>
		</div>
	);
}

export default Saturn;
