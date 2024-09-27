module.exports = {
  preset: 'ts-jest', // Use ts-jest for handling TypeScript files
  testEnvironment: 'node', // Suitable for a Node.js backend application
  testMatch: [
    '**/src/**/*.test.ts', // Target test files with a .test.ts extension within the src directory
  ],
  globals: {
    'ts-jest': {
      tsconfig: 'tsconfig.json', // Path to the tsconfig specifically for testing, if needed
    },
  },
};
