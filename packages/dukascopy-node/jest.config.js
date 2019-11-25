module.exports = {
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.ts'],
  roots: ['<rootDir>/tests'],
  transform: {
    '^.+\\.ts$': 'ts-jest'
  },
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.ts$',
  moduleFileExtensions: ['ts', 'js']
};
