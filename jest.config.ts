import type { JestConfigWithTsJest } from "ts-jest";

const jestConfig: JestConfigWithTsJest = {
  rootDir: ".",
  transform: {
    "^.+\\.tsx?$": ["ts-jest", {}],
  },
};

export default jestConfig;
