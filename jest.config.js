module.exports = {
  testMatch: ['**/?(*.)test.js?(x)'],
  roots: ['<rootDir>'],
  transform: {
    '^.+\\.jsx?$': 'babel-jest',
  },
  coverageDirectory: './coverage/',
  collectCoverage: true,
  coverageReporters: ['lcov', 'text'],
  collectCoverageFrom: [
    '!**/coverage/**',
    '!**/node_modules/**',
    'packages/**/*.{js,jsx}',
    '!packages/**/index.js',
    '!packages/**/*.props.js',
    '!packages/**/*.render*.js',
    '!packages/**/*.story.js',
    '!packages/**/*.test.js',
    '!packages/**/build/**',
    '!packages/**/node_modules/**',
  ],
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  moduleNameMapper: {
    '\\.(css|less|scss)$': 'identity-obj-proxy',
  },
  moduleFileExtensions: ['js', 'jsx'],
  coverageThreshold: {
    global: {
      statements: 98,
      branches: 95,
      functions: 98,
      lines: 98,
    },
  },
}
