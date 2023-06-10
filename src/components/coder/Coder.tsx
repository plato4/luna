import "./coder.css";

import React from "react";
import { useGameContext } from "../app/App";

const Coder: React.FC = () => {
	const { game } = useGameContext();

	return <div className="coder"></div>;
};

export default Coder;
