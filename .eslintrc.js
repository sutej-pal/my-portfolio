module.exports = {
  extends: [
    "react-app",
    "react-app/jest",
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:prettier/recommended",
  ],
  rules: {
    "react/react-in-jsx-scope": "off",
    "react/self-closing-comp": "off",
    "react/no-unescaped-entities": "warn",
    "no-constant-condition": "off",
    "react/prop-types": "off",
    "no-unused-vars": "warn",
    "prettier/prettier": ["error", { endOfLine: "auto" }],
  },
};
