/* eslint-disable @typescript-eslint/no-empty-function */
import * as BABYLON from "babylonjs";
import Component from "../Component";
import Interpreter from "../interpreter/Interpreter";

export class Guy extends Component {
	public interpreter: Interpreter = new Interpreter(45);
	public static setInterpreter?: (interpreter: Interpreter) => void;
	constructor(node: BABYLON.Node) {
		super("guy", node);
	}

	public onStart(): void {
		if (Guy.setInterpreter) Guy.setInterpreter(this.interpreter);
	}
	public onUpdate(): void {}
	public onDestroy(): void {}
}
