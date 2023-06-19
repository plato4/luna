/* eslint-disable @typescript-eslint/no-empty-function */
import Component from "../../engine/Component";

import { Guy } from "./Guy";
import { Game } from "../../engine/Game";

export class GameManager extends Component {
	public game?: Game;
	public guy?: Guy;

	public onStart(): void {
		this.guy = new Guy("Guy", this.node);
	}
	public onUpdate(): void {}
	public onDestroy(): void {}
}
