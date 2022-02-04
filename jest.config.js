module.exports = {
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: ['/node_modules/'],
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.ts(x)'],
  setupFilesAfterEnv: ['<rootDir>/.jest/setup.ts'],
  modulePaths: ['<rootDir>/src/', '<rootDir>/.jest'],
  rootDir: process.cwd(),
  testRegex: '/**/.*\\.test\\.jsx?$',
  transform: {
    '\\.js$': '<rootDir>/node_modules/babel-jest',
  },
}
