/* eslint-disable @typescript-eslint/no-empty-function */
import { Guy } from "./Guy";
import { GameManager as BaseGameManager } from "../../engine/GameManager";
import { loadLevel } from "../../engine/Level";
import { DEV_LEVEL } from "../levels/DevLevel";

export class GameManager extends BaseGameManager {
	public guy?: Guy;

	public onStart(): void {
		loadLevel(this.game.scene, DEV_LEVEL);
		this.guy = new Guy("Guy", this.node);
	}
	public onUpdate(): void {}
	public onDestroy(): void {}
}
