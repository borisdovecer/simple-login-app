module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  testMatch: ['**/packages/server/**/*.test.(ts|js)'],
  globals: {
    'ts-jest': {
      tsconfig: 'packages/server/tsconfig.json',
    },
  },
};
