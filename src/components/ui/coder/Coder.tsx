import "./coder.css";

import React from "react";
import Instructions from "./instructions/Instructions";
import Memory from "./memory/Memory";

const Coder = () => {
	return (
		<div className="bit-container coder">
			<Instructions />
			<Memory />
		</div>
	);
};

export default Coder;
