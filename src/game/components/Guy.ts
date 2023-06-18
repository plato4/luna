/* eslint-disable @typescript-eslint/no-empty-function */
import * as BABYLON from "babylonjs";
import Component from "../Component";
import Interpreter from "../interpreter/Interpreter";

export class Guy extends Component {
	public interpreter: Interpreter = new Interpreter(32);
	public static setGuy?: (guy: Guy) => void;
	constructor(node: BABYLON.Node) {
		super("guy", node);
	}

	public onStart(): void {
		if (Guy.setGuy) Guy.setGuy(this);
	}
	public step(callback: () => void): void {
		this.interpreter.step();
		callback();
	}
	public onUpdate(): void {}
	public onDestroy(): void {}
}
