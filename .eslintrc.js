module.exports = {
  root: true,
  extends: ['@react-native-community', 'airbnb', 'prettier'],
  parser: 'babel-eslint',
  settings: {
    'import/resolver': {
      'babel-module': {},
    },
  },
};
