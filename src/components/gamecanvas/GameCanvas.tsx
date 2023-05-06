import React, { useEffect, useRef } from "react";
import { createGame } from "../../game/Game";
import { useGameContext } from "../app/App";

const GameCanvas: React.FC = () => {
	const { game, setGame } = useGameContext();
	const canvas = useRef<HTMLCanvasElement>(null);
	useEffect(() => {
		if (!canvas.current) return;
		const _game = createGame(canvas.current);
		setGame(_game);
		return (): void => {
			_game.dispose();
		};
	}, []);
	return <canvas ref={canvas} style={{ width: "100%", height: "100%" }} />;
};

export default GameCanvas;
