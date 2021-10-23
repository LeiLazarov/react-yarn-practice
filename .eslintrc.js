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
        'key-spacing': ['error', {
            beforeColon: false,
            afterColon: true
        }],
        indent: ['error', 4],
        curly: ['error', 'multi'],
        'object-curly-spacing': ['error', 'always'],
        eqeqeq: ['error', 'smart'],
        'no-unused-vars': 'error',
        'prefer-const': 'error'
    }
};
