/*
 * For a detailed explanation regarding each configuration property and type check, visit:
 * https://jestjs.io/docs/configuration
 */

export default {
  preset: "ts-jest",
  clearMocks: true,
  collectCoverage: true,
  coverageDirectory: "coverage",
  coveragePathIgnorePatterns: [
    "/node_modules/"
  ],
  coverageProvider: "v8",
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100
    }
  },
  globalSetup: "<rootDir>/tests/setup.js",
  globalTeardown: "<rootDir>/tests/teardown.js",
  moduleDirectories: [
    "node_modules"
  ],
  moduleFileExtensions: [
    "js",
    "ts",
    "json",
  ],
  moduleNameMapper: {},
  roots: [
    "<rootDir>/tests/"
  ],
  testMatch: [
    "**/tests/**/?(*.)+(spec|test).[tj]s",
    "**/?(*.)+(spec|test).[tj]s"
  ],
};
