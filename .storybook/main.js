module.exports = {
  stories: ['../src/**/*.stories.js'],
  addons: [{
    name: '@storybook/addon-essentials',
    options: {
      backgrounds: false,
    },
  }],
  framework: {
    name: '@storybook/react-webpack5',
    options: {},
  },
};
