/* eslint-disable @typescript-eslint/no-empty-function */
import { TransformNode, Vector3 } from "babylonjs";
import Component from "../Component";

export class Rotate extends Component {
	public onStart(): void {}
	public onDestroy(): void {}
	public onUpdate() {
		if (this.node instanceof TransformNode) {
			this.node.rotate(Vector3.One(), this.node.getScene().deltaTime * 0.001);
			console.log("Rotate Component");
		}
	}
}
