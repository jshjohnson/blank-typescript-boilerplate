module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  clearMocks: true,
  restoreMocks: true,
  modulePathIgnorePatterns: ['<rootDir>/dist'],
  testRegex: '.*.spec.ts',
};
