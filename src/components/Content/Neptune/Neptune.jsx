import React from "react";
import "../contentStyle.css";
import { motion } from "framer-motion";
import PlanetsSeparator from "../PlanetsSeparator";

function Neptune() {
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
						Dark, cold, and whipped by supersonic winds, ice giant Neptune is
						the eighth and most distant planet in our solar system.
					</p>
					<p>
						More than 30 times as far from the Sun as Earth, Neptune is the only
						planet in our solar system not visible to the naked eye and the
						first predicted by mathematics before its discovery. In 2011 Neptune
						completed its first 165-year orbit since its discovery in 1846.
					</p>
					<p>
						NASA's Voyager 2 is the only spacecraft to have visited Neptune up
						close. It flew past in 1989 on its way out of the solar system.
					</p>
				</motion.div>
			</div>

			<div className="row pt-5 planet-facts">
				<div className="row text-center ">
					<h1 className="pb-5">SIX things to know About Neptune</h1>
				</div>
				{/* ********************************************************************* */}

				<div className="col-lg-5 ">
					<motion.div
						className="fact1 col-lg-12 text-end pt-5"
						initial={fadeAnime.offscreen}
						whileInView={fadeAnime.onscreen}
						viewport={{ once: true, amount: 0.8 }}
					>
						<h3>EIGHTH WANDERER</h3>
						<p>
							Neptune orbits our Sun, a star, and is the eighth planet from the
							Sun at a distance of about 2.8 billion miles (4.5 billion
							kilometers).
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
							Neptune takes about 16 hours to rotate once (a Neptunian day), and
							about 165 Earth years to orbit the sun (a Neptunian year).
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
						<h3> MOONS</h3>
						<p>
							Neptune has 14 known moons which are named after sea gods and
							nymphs in Greek mythology.
						</p>
					</motion.div>
					<motion.div
						className="fact6 col-lg-12 pt-5 text-start"
						initial={fadeAnime.offscreen}
						whileInView={fadeAnime.onscreen}
						viewport={{ once: false, amount: 0.8 }}
					>
						<h3>ONE VOYAGE THERE</h3>
						<p>
							Voyager 2 is the only spacecraft to have visited Neptune. No
							spacecraft has orbited this distant planet to study it at length
							and up close.
						</p>
					</motion.div>
				</div>
			</div>
		</div>
	);
}

export default Neptune;
