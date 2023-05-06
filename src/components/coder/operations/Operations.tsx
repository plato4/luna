import React from "react";
import { Operations as Oprs } from "../../../game/components/Interpreter";
import "./operations.css";
import Operation from "./Operation";

const Operations = () => {
	return (
		<div className="operations">
			{Object.keys(Oprs)
				.filter((v) => !/^\d+$/.test(v))
				.map((v, i) => (
					<div key={i} className="operation-container">
						<Operation text={v} />
					</div>
				))}
		</div>
	);
};

export default Operations;
