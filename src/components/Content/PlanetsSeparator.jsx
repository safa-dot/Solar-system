import React from "react";
import { motion } from "framer-motion";
import icon1 from "../../assets/images/planet-icon1.png";
import icon2 from "../../assets/images/planet-icon2.png";
import icon3 from "../../assets/images/planet-icon3.png";
import icon4 from "../../assets/images/planet-icon4.png";
import icon5 from "../../assets/images/planet-icon5.png";

function PlanetsSeparator() {
	const iconAnim = {
		offscreen: {
			opacity: 0,
		},
		onscreen: {
			opacity: 0.8,
			transition: {
				type: "spring",
				duration: 5,
			},
		},
	};
	return (
		<div>
			<motion.img
				initial={iconAnim.offscreen}
				whileInView={iconAnim.onscreen}
				viewport={{ once: false, amount: 0.8 }}
				className="col-lg-12 pt-2"
				src={icon1}
				alt=""
			/>
			<motion.img
				initial={iconAnim.offscreen}
				whileInView={iconAnim.onscreen}
				viewport={{ once: false, amount: 0.8 }}
				className="col-lg-12 pt-2"
				src={icon2}
				alt=""
			/>
			<motion.img
				initial={iconAnim.offscreen}
				whileInView={iconAnim.onscreen}
				viewport={{ once: false, amount: 0.8 }}
				className="col-lg-12 pt-2"
				src={icon3}
				alt=""
			/>
			<motion.img
				initial={iconAnim.offscreen}
				whileInView={iconAnim.onscreen}
				viewport={{ once: false, amount: 0.8 }}
				className="col-lg-12 pt-2"
				src={icon4}
				alt=""
			/>
			<motion.img
				initial={iconAnim.offscreen}
				whileInView={iconAnim.onscreen}
				viewport={{ once: false, amount: 0.8 }}
				className="col-lg-12 pt-2"
				src={icon5}
				alt=""
			/>
		</div>
	);
}

export default PlanetsSeparator;
