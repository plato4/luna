import "./coder.css";

import { useState } from "react";

import Instructions from "./instructions/Instructions";
import Memory from "./memory/Memory";
import Controls from "./controls/Controls";
import Interpreter from "../../../game/interpreter/Interpreter";
import { Guy } from "../../../game/components/Guy";

const Coder = () => {
	const [interpreter, setInterpreter] = useState<Interpreter>();

	Guy.setInterpreter = setInterpreter;

	return interpreter ? (
		<div className="coder">
			<Memory interpreter={interpreter} />
			<Instructions interpreter={interpreter} />
			<Controls interpreter={interpreter} />
		</div>
	) : (
		<div>No Interpeter</div>
	);
};

export default Coder;
