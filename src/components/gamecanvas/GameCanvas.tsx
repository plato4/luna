import React, { useEffect, useRef } from "react";
import { useGameContext } from "../app/App";
import { createGame } from "../../game/Game";

const GameCanvas: React.FC = () => {
	const { setGame } = useGameContext();
	const canvas = useRef<HTMLCanvasElement>(null);
	useEffect(() => {
		if (!canvas.current) return;
		const _game = createGame(canvas.current);
		setGame(_game);
		return (): void => {
			_game.dispose();
		};
	}, [setGame]);
	return <canvas ref={canvas} style={{ width: "100%", height: "100%" }} />;
};

export default GameCanvas;
