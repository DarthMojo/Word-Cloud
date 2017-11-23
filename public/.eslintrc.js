module.exports = {
    "env": {
        "browser": true,
        "es6": true,
        "jest": true,
    },
    "extends": "react",
    "parserOptions": {
        "ecmaFeatures": {
            "experimentalObjectRestSpread": true,
            "jsx": true
        },
        "sourceType": "module"
    },
    "parser": "babel-eslint",
    "plugins": [
        "react",
        "flowtype"

    ],
    "rules": {
        "linebreak-style": [
            "error",
            "unix"
        ],
        "quotes": [
            "error",
            "double"
        ],
        "semi": [
            "error",
            "always"
        ],
        "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
        "flowtype/boolean-style": [
            "error",
            "boolean"
        ],
        "flowtype/define-flow-type": "error",
        "flowtype/generic-spacing": [
            "error",
            "never"
        ],
        "flowtype/no-primitive-constructor-types": "error",
        "flowtype/no-weak-types": "off",
        "flowtype/object-type-delimiter": [
            "error",
            "comma"
        ],
        "flowtype/require-valid-file-annotation": "error",
        "flowtype/semi": [
            "error",
            "always"
        ],
        "flowtype/space-after-type-colon": [
            "error",
            "always"
        ],
        "flowtype/space-before-generic-bracket": [
            "error",
            "never"
        ],
        "flowtype/space-before-type-colon": [
            "error",
            "never"
        ],
        "flowtype/union-intersection-spacing": [
            "error",
            "always"
        ],
        "flowtype/use-flow-type": 1,
        "flowtype/require-return-type": "error",
        "flowtype/valid-syntax": "error",
        "react/prop-types": [ 1, { "ignore": [ "object" ]}]
    },
    "settings": {
        "flowtype": {
            "onlyFilesWithFlowAnnotation": true
        }
    }
};