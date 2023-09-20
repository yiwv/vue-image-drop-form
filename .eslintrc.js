module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:vue/vue3-essential"
    ],
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "vue",
        "vitest"
    ],
    "extends": [
        "plugin:vue/recommended",
        "plugin:vitest/recommended"
    ],
    "rules": {
        "semi": ["error", "never"],
        "vitest/consistent-test-it": ["error", {"fn": "it"}],
        "vitest/require-top-level-describe": ["error"]
    }
}
