module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    // 'type-empty': [2, 'always', 0],
    'type-enum': [
      2,
      'always',
      [
        'build',
        'chore',
        'ci',
        'docs',
        'feat',
        'fix',
        'perf',
        'refactor',
        'revert',
        'style',
        'test',
      ],
    ],
  },
};
