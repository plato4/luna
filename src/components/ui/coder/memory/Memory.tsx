import { GameContext } from "../../../app/App";
import "./memory.css";

import React, { useContext } from "react";

const Memory = () => {
	const { game } = useContext(GameContext);

	return (
		<div className="container memory">
			<div className="memory-inner"></div>
		</div>
	);
};

export default Memory;
