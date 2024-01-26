export const theme = Object.freeze({
  light: {
    colors: {
      accent: '#2196F3',
      white: '#ffffff',
      gray: '#9e9e9e',
      light: '#f2f2f2',
      dark: '#212121',
      blue: '#378bdb',
      indicator: '#5ADB6F',
      lightgreen: '#37DBC2',
      link: '#fc7245',
      tagBackground: ['linear-gradient(to bottom, #FFD194, #D1913C)'],
    },
    spacing: value => `${value * 4}px`,
    shadows: {
      small: '0 5px 7px -1px rgba(51, 51, 51, 0.23)',
      regular: '0px 4px 10px 4px #9e9e9e',
      medium: '0 9px 47px 11px rgba(51, 51, 51, 0.18);',
    },
  },
  dark: {
    colors: {
      accent: '#ff00ff',
      white: '#ba55d3',
      gray: '#9370db',
      light: '#8a2be2',
      dark: '#800080',
      blue: '#4b00b2',
      indicator: '#6a5acd',
      lightgreen: '#483d8b',
      link: '#e6e6fa',
      tagBackground: ['linear-gradient(to bottom, #FFD194, #D1913C)'],
    },
    spacing: value => `${value * 4}px`,
    shadows: {
      small: '0 5px 7px -1px rgba(51, 51, 51, 0.23)',
      regular: '0px 4px 10px 4px #9e9e9e',
      medium: '0 9px 47px 11px rgba(51, 51, 51, 0.18);',
    },
  },
});
