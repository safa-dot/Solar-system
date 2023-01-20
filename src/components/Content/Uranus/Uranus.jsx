import React from "react";
import "../contentStyle.css";
import { motion } from "framer-motion";
import PlanetsSeparator from "../PlanetsSeparator";

function Uranus() {
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
						Uranus is the seventh planet from the Sun, and has the third-largest
						diameter in our solar system. It was the first planet found with the
						aid of a telescope, Uranus was discovered in 1781 by astronomer
						William Herschel, although he originally thought it was either a
						comet or a star.
					</p>
					<p>
						It was two years later that the object was universally accepted as a
						new planet, in part because of observations by astronomer Johann
						Elert Bode.
					</p>
					<p>
						Herschel tried unsuccessfully to name his discovery Georgium Sidus
						after King George III. Instead, the scientific community accepted
						Bode's suggestion to name it Uranus, the Greek god of the sky, as
						suggested by Bode.​
					</p>
				</motion.div>
			</div>

			<div className="row pt-5 planet-facts">
				<div className="row text-center ">
					<h1 className="pb-5">SIX things to know About Uranus</h1>
				</div>
				{/* ********************************************************************* */}

				<div className="col-lg-5 ">
					<motion.div
						className="fact1 col-lg-12 text-end pt-5"
						initial={fadeAnime.offscreen}
						whileInView={fadeAnime.onscreen}
						viewport={{ once: true, amount: 0.8 }}
					>
						<h3>SEVENTH WANDERER</h3>
						<p>
							Uranus orbits our Sun, a star, and is the seventh planet from the
							Sun at a distance of about 1.8 billion miles (2.9 billion
							kilometers).
						</p>
					</motion.div>

					<motion.div
						className="fact2 col-lg-12 text-end pt-5"
						initial={fadeAnime.offscreen}
						whileInView={fadeAnime.onscreen}
						viewport={{ once: false, amount: 0.8 }}
					>
						<h3>SHORT-ISH DAY, LONGISH YEAR</h3>
						<p>
							Uranus takes about 17 hours to rotate once (a Uranian day), and
							about 84 Earth years to complete an orbit of the Sun (a Uranian
							year).
						</p>
					</motion.div>

					<motion.div
						className="fact3 col-lg-12  text-end pt-5"
						initial={fadeAnime.offscreen}
						whileInView={fadeAnime.onscreen}
						viewport={{ once: false, amount: 0.8 }}
					>
						<h3>ICE GIANT</h3>
						<p>
							Uranus is an ice giant. Most of its mass is a hot, dense fluid of
							"icy" materials – water, methane and ammonia – above a small rocky
							core.
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
						<h3>GASSY</h3>
						<p>
							Uranus has an atmosphere made mostly of molecular hydrogen and
							atomic helium, with a small amount of methane.
						</p>
					</motion.div>

					<motion.div
						className="fact5 col-lg-12 pt-5 text-start"
						initial={fadeAnime.offscreen}
						whileInView={fadeAnime.onscreen}
						viewport={{ once: false, amount: 0.8 }}
					>
						<h3>MANY MOONS</h3>
						<p>
							Uranus has 27 known moons, and they are named after characters
							from the works of William Shakespeare and Alexander Pope.
						</p>
					</motion.div>
					<motion.div
						className="fact6 col-lg-12 pt-5 text-start"
						initial={fadeAnime.offscreen}
						whileInView={fadeAnime.onscreen}
						viewport={{ once: false, amount: 0.8 }}
					>
						<h3>A BIT LONELY</h3>
						<p>
							Voyager 2 is the only spacecraft to fly by Uranus. No spacecraft
							has orbited this distant planet to study it at length and up
							close.
						</p>
					</motion.div>
				</div>
			</div>
		</div>
	);
}

export default Uranus;
