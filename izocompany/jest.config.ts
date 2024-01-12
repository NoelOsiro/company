import type {Config} from 'jest';
import nextJest from "next/jest";

const config = nextJest({
  dir: "./",
  
});
const customJestConfig: Config = {
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
  testEnvironment: "jsdom",
  clearMocks: true,
  collectCoverage: true,
  coverageDirectory: "coverage",
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': 'babel-jest',
  },
};

export default config(customJestConfig);
