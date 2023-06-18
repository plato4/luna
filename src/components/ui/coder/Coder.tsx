import "./coder.css";

import { useState } from "react";

import Instructions from "./instructions/Instructions";
import Memory from "./memory/Memory";
import Controls from "./controls/Controls";
import { Guy } from "../../../game/components/Guy";

const Coder = () => {
	const [guy, setGuy] = useState<Guy>();
	Guy.setGuy = setGuy;
	const [, setRerender] = useState({});

	return guy ? (
		<div className="coder">
			<Memory guy={guy} />
			<Instructions guy={guy} />
			<Controls guy={guy} rerender={() => setRerender({})} />
		</div>
	) : (
		<div>No Interpeter</div>
	);
};

export default Coder;
