import { Guy } from "../../../../game/components/Guy";
import { GameContext } from "../../../app/App";
import "./memory.css";

import React, { useContext, useState } from "react";

const Memory = () => {
	const { game } = useContext(GameContext);
	const [memory, setMemory] = useState<Array<number>>([]);

	Guy.setMemory = (memory: Array<number>) => setMemory(memory);

	return (
		<div className="container memory">
			<div className="memory-inner">
				{memory.map((v, i) => (
					<div key={i} className="container inner memory-value">
						{v}
					</div>
				))}
			</div>
		</div>
	);
};

export default Memory;
