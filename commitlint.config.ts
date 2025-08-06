/** @type {import('@commitlint/types').Config} */
const config = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [2, 'always', [
      'feat',
      'fix',
      'docs',
      'style',
      'refactor',
      'perf',
      'test',
      'chore',
      'revert',
      'ci',
      'build'
    ]]
  }
};

module.exports = config; 