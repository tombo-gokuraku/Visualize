module.exports = {
  parser: "babel-eslint",
  rules: {
    strict: 0,
    "emotion/jsx-import": "error",
    "emotion/no-vanilla": "error",
    "emotion/import-from-emotion": "error",
    "emotion/styled-import": "error",
    "react/self-closing-comp": [
      "error",
      {
        component: true,
        html: true,
      },
    ],
  },
  globals: {
    __PATH_PREFIX__: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "react-app",
    "plugin:jsx-a11y/recommended",
  ],
  plugins: ["jsx-a11y", "emotion"],
}
