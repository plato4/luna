import "./status.css";

interface StatusProps {
	status: string;
}

const Status: React.FC<StatusProps> = ({ status }) => {
	return (
		<div className="container status">
			<div className="textbox status-text">Status - {status}</div>
		</div>
	);
};

export default Status;
