/* eslint-disable @typescript-eslint/no-empty-function */
import { CPUTests } from "../../cpu/Tests";
import Component from "../../engine/Component";
import Interpreter, { Status } from "../../interpreter/Interpreter";

export class Guy extends Component {
	public interpreter: Interpreter = new Interpreter(32);
	public static setGuy?: (guy: Guy) => void;

	public onStart(): void {
		if (Guy.setGuy) Guy.setGuy(this);
		CPUTests();
	}
	public step(): Status {
		return this.interpreter.step();
	}
	public onUpdate(): void {}
	public onDestroy(): void {}
}
