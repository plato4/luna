import "./coder.css";

import Instructions from "./instructions/Instructions";
import Memory from "./memory/Memory";
import Controls from "./controls/Controls";

const Coder = () => {
	return (
		<div className="coder">
			<Instructions />
			<Controls />
			<Memory />
		</div>
	);
};

export default Coder;
