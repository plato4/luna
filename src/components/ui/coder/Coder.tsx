import "./coder.css";

import React from "react";
import Instructions from "./instructions/Instructions";
import Memory from "./memory/Memory";

const Coder = () => {
	return (
		<div className="coder">
			<Instructions />
			<Memory />
		</div>
	);
};

export default Coder;
