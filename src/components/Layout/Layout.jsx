import React from "react";
import "./layout.css";


function Layout(props) {
	return (
		<>
			
			<div className="layout-container">
				<video loop autoPlay muted id="bg-video">
					<source
						src={require("../../assets/images/starry-night.mp4")}
						type="video/mp4"
					/>
				</video>
				{props.children}
			</div>
		</>
	);
}

export default Layout;
