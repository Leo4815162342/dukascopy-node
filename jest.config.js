module.exports = {
  transform: {
    '.(ts|js)': 'ts-jest'
  },
  testRegex: '(/__tests__/.*|\\.(test|spec))\\.(ts|js)$',
  moduleFileExtensions: ['ts', 'js'],
  testPathIgnorePatterns: ['<rootDir>[/\\\\](node_modules|bin|lib|build)[/\\\\]'],
  transformIgnorePatterns: ['[/\\\\]node_modules[/\\\\].+\\.(js|ts)$']
};
