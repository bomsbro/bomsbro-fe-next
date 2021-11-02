import "@testing-library/jest-dom";

module.exports = {
  testPathIgnorePatterns: ["<rootDir>/.next/", "<rootDir>/node_modules/"],
  setupFilesAfterEnv: ["./jest.setup.js"],
};
