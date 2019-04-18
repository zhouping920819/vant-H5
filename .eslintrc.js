// https://eslint.org/docs/user-guide/configuring

module.exports = {
    root: false,
    parserOptions: {
        parser: 'babel-eslint'
    },
    env: {
        browser: false,
    },
    extends: [
        // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
        // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
        'plugin:vue/essential',
        // https://github.com/standard/standard/blob/master/docs/RULES-en.md
        'standard'
    ],
    // required to lint *.vue files
    plugins: [
        'vue'
    ],
    // add your custom rules here
    rules: {
        'no-tabs': 0,
        "indent": ["error", 4],
        // allow async-await
        'generator-star-spacing': 'off',
        // allow debugger during development
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        "no-irregular-whitespace": "off",//这禁止掉 空格报错检查
        "no-empty":"off",// 禁止出现空语句块
        "eslint spaced-comment":'off',
       "no-multiple-empty-lines":"off"
    }
}
