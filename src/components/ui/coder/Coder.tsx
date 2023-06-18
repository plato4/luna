import "./coder.css";

import { useState } from "react";

import Instructions from "./instructions/Instructions";
import Memory from "./memory/Memory";
import Controls from "./controls/Controls";
import { Guy } from "../../../game/components/Guy";
import Status from "./status/Status";

const Coder = () => {
	const [guy, setGuy] = useState<Guy>();
	Guy.setGuy = setGuy;
	const [, setRerender] = useState({});
	const [status, setStatus] = useState("OK");

	return guy ? (
		<div className="coder">
			<Memory guy={guy} />
			<Instructions guy={guy} />
			<Status status={status} />
			<Controls
				guy={guy}
				rerender={() => setRerender({})}
				setStatus={setStatus}
			/>
		</div>
	) : (
		<div>No Interpeter</div>
	);
};

export default Coder;
