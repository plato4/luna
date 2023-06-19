import { Game } from "../engine/Game";
import { DEV_LEVEL } from "./levels/DevLevel";

export const createGame = (canvas: HTMLCanvasElement): Game => {
	return new Game(canvas, DEV_LEVEL);
};
