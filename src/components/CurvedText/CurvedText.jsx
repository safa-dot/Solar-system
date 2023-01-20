import ReactCurvedText from "react-curved-text";

import React from "react";

function CurvedText(props) {
	return (
		<ReactCurvedText
			width="577"
			height="150"
			cx="290"
			cy="150"
			rx="273"
			ry="90"
			startOffset="0"
			reversed={true}
			text=""
			textProps={{ style: { fontSize: 24 } }}
			textPathProps={{ fill: "#ffffff" }}
			tspanProps={null}
			ellipseProps={null}
			svgProps={null}
		>
			{props.children}
		</ReactCurvedText>
	);
}

export default CurvedText;
