module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true, // 添加 node 环境
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended', // 添加 prettier 插件
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint'],
  rules: {
    '@typescript-eslint/no-var-requires': 'off', // 关闭 require 报错
  },
  settings: {
    react: {
      version: 'detect',
      '@typescript-eslint/no-explicit-any': 'off', // 关闭 any 报错
      'no-unused-vars': 'off', // 禁用规则
      '@typescript-eslint/no-unused-vars': [
        'warn',
        { argsIgnorePattern: '^_' },
      ],
    },
  },
};
