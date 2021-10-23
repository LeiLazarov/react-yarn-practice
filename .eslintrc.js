module.exports = {
    env: {
        'browser': true,
        'es2021': true,
        'node': true,
        'jest': true
    },
    extends: [
        'eslint:recommended',
        'plugin:react/recommended',
    ],
    parserOptions: {
        ecmaFeatures: {
            jsx: true
        },
        ecmaVersion: 2015,
        sourceType: 'module'
    },
    plugins: ['react'],
    rules: {
        semi: [2, 'always'],
        quotes: ['error', 'single'],
        indent: ['error', 4],
        eqeqeq: [
            'error',
            'smart'
        ],
    }
};
