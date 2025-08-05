
module.exports = {
    testEnvironment: 'jsdom',
    watchPathIgnorePatterns: ['<rootDir>/node_modules/', '<rootDir>/dist/', '<rootDir>/coverage/'],
    setupFiles: ['./jest.setup.js', 'whatwg-fetch'],
    setupFilesAfterEnv: ['<rootDir>/jest.setup.js']
  };
  