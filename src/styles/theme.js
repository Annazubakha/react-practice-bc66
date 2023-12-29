export const theme = Object.freeze({
  colors: {
    accent: '#2196F3',
    white: '#ffffff',
    gray: '#9e9e9e',
    light: '#f2f2f2',
    dark: '#212121',
    tagBackground: ['linear-gradient(to bottom, #FFD194, #D1913C)'],
  },
  spacing: value => `${value * 4}px`,
  shadows: {
    small: '0 5px 7px -1px rgba(51, 51, 51, 0.23)',
    regular: '0px 4px 10px 4px #9e9e9e',
    medium: '0 9px 47px 11px rgba(51, 51, 51, 0.18);',
  },
});
