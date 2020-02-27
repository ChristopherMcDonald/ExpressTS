module.exports = {
    "settings": {
        "import/resolver": {
            "node": { "extensions": [".js", ".jsx", ".ts", ".tsx"] }
        }
    },
    "env": {
        "browser": true,
        "es6": true,
        "mocha": true,
    },
    "extends": [
        "airbnb-base"
    ],
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "plugins": [
        "@typescript-eslint",
        "chai-friendly",
    ],
    "rules": {
        "no-unused-expressions": 0,
        "chai-friendly/no-unused-expressions": 2,
        "import/extensions": [
            "error",
            "ignorePackages",
            {
                "ts": "never",
            }
         ]
    }
};