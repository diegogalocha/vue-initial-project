module.exports = {
    root: true,
    env: {
        node: true
    },
    'extends': [
        'google',
        'eslint:recommended',
        'plugin:vue/base'
    ],
    parserOptions: {
        parser: 'babel-eslint'
    },
    rules: {
        'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off'
    }
};