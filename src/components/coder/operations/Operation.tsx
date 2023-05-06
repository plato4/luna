import "./operation.css";
import React from "react";

export interface OperationProps {
	text: string;
}

const Operation: React.FC<{ text: string }> = ({ text }) => {
	return <div className="bit-button operation">{text}</div>;
};

export default Operation;
