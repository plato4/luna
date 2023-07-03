/* eslint-disable @typescript-eslint/no-empty-function */
import { Guy } from "./Guy";
import { GameManager as BaseGameManager } from "../../engine/GameManager";

export class GameManager extends BaseGameManager {
	public guy?: Guy;

	public onStart(): void {
		this.guy = new Guy("Guy", this.node);
	}
	public onUpdate(): void {}
	public onDestroy(): void {}
}
