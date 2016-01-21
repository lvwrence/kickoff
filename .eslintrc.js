module.exports = {
    "rules": {
        "indent": [
            2,
            4
        ],
        "quotes": [
            2,
            "single"
        ],
        "linebreak-style": [
            2,
            "unix"
        ],
        "semi": [
            2,
            "never"
        ]
    },
    "env": {
        "es6": true,
        "browser": true
    },
    "extends": "airbnb",
    "ecmaFeatures": {
        "jsx": true,
        "experimentalObjectRestSpread": true
    },
    "plugins": [
        "react"
    ]
};
