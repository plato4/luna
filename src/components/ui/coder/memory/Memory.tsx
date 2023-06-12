import { Guy } from "../../../../game/components/Guy";
import "./memory.css";

import { useState } from "react";

const Memory = () => {
	const [memory, setMemory] = useState<Array<number>>([]);

	Guy.setMemory = (memory: Array<number>) => setMemory(memory);

	return (
		<div className="container memory">
			<div className="memory-inner">
				{memory.map((v, i) => (
					<div key={i} className="label memory-value">
						{v}
					</div>
				))}
			</div>
		</div>
	);
};

export default Memory;
