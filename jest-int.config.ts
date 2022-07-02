// eslint-disable-next-line @typescript-eslint/no-var-requires
const integrationTestConfig = require('./jest.config.ts')
integrationTestConfig.testMatch = ['**/*test.ts']

module.exports = integrationTestConfig
