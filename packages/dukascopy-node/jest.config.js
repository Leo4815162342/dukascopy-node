module.exports = {
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.ts'],
  transform: {
    '^.+\\.ts$': 'ts-jest'
  },
  moduleFileExtensions: ['ts', 'js']
};
