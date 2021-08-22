module.exports = {
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.ts', '!src/**/tests/cases/*.ts', '!lib/**/*'],
  coveragePathIgnorePatterns: ['<rootDir>/lib/'],
  transform: {
    '^.+\\.ts$': 'ts-jest'
  },
  moduleFileExtensions: ['ts', 'js']
};
