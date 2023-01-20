import React from "react";
// Import Swiper React components
import { Swiper } from "swiper/react";

// Import Swiper styles
import "swiper/swiper.min.css";
import "./swiper.css";
import "swiper/css/bundle";

// import Swiper core and required modules
import SwiperCore, { Autoplay, Pagination, Navigation } from "swiper/core";
// import earth1 from "../../assets/images/earth1.png";
// import earth2 from "../../assets/images/earth2.png";
// import earth3 from "../../assets/images/earth3.png";
// import earth4 from "../../assets/images/earth4.png";

// install Swiper modules
SwiperCore.use([Pagination, Navigation]);

export default function SwiperGallery(props) {
	return (
		<>
			<Swiper
				slidesPerView={2.5}
				centeredSlides={true}
				spaceBetween={30}
				pagination={{
					type: "fraction",
				}}
				autoplay={{
					delay: 2000,
					disableOnInteraction: false,
				}}
				navigation={false}
				modules={[Autoplay, Pagination]}
				className="mySwiper"
			>
				{props.children}
			</Swiper>
		</>
	);
}
