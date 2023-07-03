import { Game } from "../engine/Game";
import { GameManager } from "./components/GameManager";

export const createGame = (canvas: HTMLCanvasElement): Game => {
	return new Game(canvas, GameManager);
};
