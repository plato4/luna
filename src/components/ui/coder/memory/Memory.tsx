import { Guy } from "../../../../game/components/Guy";
import { GameContext } from "../../../app/App";
import "./memory.css";

import React, { useContext, useState } from "react";

const Memory = () => {
	const { game } = useContext(GameContext);
	const [rerender, setRerender] = useState({});

	Guy.renderHook = () => setRerender({});

	return (
		<div className="container memory">
			<div className="memory-inner"></div>
		</div>
	);
};

export default Memory;
