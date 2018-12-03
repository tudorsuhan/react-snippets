module.exports = {
    "extends": "airbnb",
    "parser": "babel-eslint",
    "env": {
        "browser": true,
        "node": true,
        "es6": true,
        "mocha": true
    },
    "rules": {
        "indent": ["error", 4],
        "react/jsx-indent": ["warn", 4],
        "react/jsx-wrap-multilines": true,
        "implicit-arrow-linebreak": ["error", "below"],
        "function-paren-newline": ["error", "never"],
        "linebreak-style": ["error", "unix"],
        "max-len": [1, 180, 2, { "ignoreComments": true }],
        "linebreak-style": 0,
        "plugins": ["react"],
        "parser": "babel-eslint",
        "parserOptions": {
            "ecmaVersion": 6,
            "sourceType": "module",
            "ecmaFeatures": {
              "jsx": true
            }
        },
        "react/jsx-filename-extension": [1, {
            "extensions": [".js", ".jsx"]
        }],
        "extends": ["airbnb-base"]
    }
}