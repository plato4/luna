import { CPUTest } from "./CPU";
import { memoryTest } from "./Memory";

export const CPUTests = () => {
	memoryTest();
	CPUTest();
};
