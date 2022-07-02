// eslint-disable-next-line @typescript-eslint/no-var-requires
const unitTestConfig = require('./jest.config.ts')
unitTestConfig.testMatch = ['**/*spec.ts']

module.exports = unitTestConfig
