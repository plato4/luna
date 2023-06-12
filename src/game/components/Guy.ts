/* eslint-disable @typescript-eslint/no-empty-function */
import * as BABYLON from "babylonjs";
import Component from "../Component";
import Interpreter from "../interpreter/Interpreter";

export class Guy extends Component {
	public interpreter: Interpreter = new Interpreter(48);
	public static setMemory?: (memory: Array<number>) => void;
	constructor(node: BABYLON.Node) {
		super("guy", node);
	}

	public onStart(): void {
		if (Guy.setMemory) Guy.setMemory(this.interpreter.getAllMemory());
	}
	public onUpdate(): void {}
	public onDestroy(): void {}
}
