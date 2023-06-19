import * as BABYLON from "babylonjs";

import { GameScene, IGameSceneModel, ILevel } from "../../engine/GameScene";
import { GameManager } from "../components/GameManager";

const generate_ground = (
	model: IGameSceneModel,
	width: number,
	height: number
): IGameSceneModel[] => {
	const models: IGameSceneModel[] = [];

	for (let x = 0; x < width; x++)
		for (let y = 0; y < height; y++) {
			models.push({
				modelName: model.modelName,
				folderPath: model.folderPath,
				fileName: model.fileName,
				position: new BABYLON.Vector3(x, 0, y),
				rotation: model.rotation,
				scale: model.scale,
			});
		}

	return models;
};

export const DEV_LEVEL: ILevel = {
	models: [
		...generate_ground(
			{
				modelName: "",
				folderPath: "./",
				fileName: "Floor.gltf",
				position: new BABYLON.Vector3(0, 0, 0),
				rotation: new BABYLON.Vector3(0, 0, 0),
				scale: new BABYLON.Vector3(1, 1, 1),
			},
			10,
			10
		),
	],
	clearColor: "#966c6c",
	gameManager: { name: "GameManager", component: GameManager },
	camera: {
		position: new BABYLON.Vector3(0, 25, -20),
		rotation: new BABYLON.Vector3(0.9, 0, 0),
	},
	postBuild: (gameScene: GameScene) => {
		console.log("dev level built", gameScene);
	},
};
