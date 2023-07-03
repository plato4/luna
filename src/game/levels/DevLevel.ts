import * as BABYLON from "babylonjs";

import { IModel, ILevel } from "../../engine/Level";

const generate_ground = (
	model: IModel,
	width: number,
	height: number
): IModel[] => {
	const models: IModel[] = [];

	for (let x = 0; x < width; x++)
		for (let y = 0; y < height; y++) {
			models.push({
				modelName: model.modelName,
				folderPath: model.folderPath,
				fileName: model.fileName,
				position: new BABYLON.Vector3(width / 2 - x, 0, height / 2 - y),
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
		{
			modelName: "",
			folderPath: "./",
			fileName: "guy.gltf",
			position: new BABYLON.Vector3(0, 1, 0),
			rotation: new BABYLON.Vector3(0, 0, 0),
			scale: new BABYLON.Vector3(1, 1, 1),
		},
	],
	clearColor: "#966c6c",
	camera: {
		position: new BABYLON.Vector3(0, 25, -20),
		rotation: new BABYLON.Vector3(0.9, 0, 0),
	},
	postBuild: (scene: BABYLON.Scene) => {
		console.log("dev level built", scene);
	},
};
