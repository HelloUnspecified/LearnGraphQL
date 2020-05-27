// require('dotenv').config({ path: '.env.test' });

module.exports = () => ({
  files: ['src/**/*.js', 'src/**/*.graphql', '!src/**/__tests__/**.js'],
  tests: ['src/**/__tests__/**.js'],
  env: {
    type: 'node',
  },
  testFramework: 'jest',
});
