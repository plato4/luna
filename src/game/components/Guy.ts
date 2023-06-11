/* eslint-disable @typescript-eslint/no-empty-function */
import * as BABYLON from "babylonjs";
import Component from "../Component";
import Interpreter from "../interpreter/Interpreter";

export class Guy extends Component {
	public interpreter: Interpreter = new Interpreter(32);
	public static renderHook?: () => void;
	constructor(node: BABYLON.Node) {
		super("guy", node);
	}

	public onStart(): void {}
	public onUpdate(): void {}
	public onDestroy(): void {}
}
