module.exports = {
  testMatch: ['**/packages/**/src/**/*.test.js'],
  roots: ['<rootDir>'],
  transform: {
    '^.+\\.js': 'babel-jest',
  },
  moduleFileExtensions: ['js'],
}
