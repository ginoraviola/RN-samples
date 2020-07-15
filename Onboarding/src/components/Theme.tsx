import {BaseTheme, createText} from "@shopify/restyle";


const theme: BaseTheme = {
  colors: {
    primary: '#2CB9B0',
    title: '#0C0D34',
    body: 'rgba(12, 13, 52, .7)',
    white: 'white',
  },
  spacing: {
    s: 8,
    m: 16,
    l: 24,
    xl: 40,
  },
  textVariants: {
    hero: {
      fontSize: 80,
      lineHeight: 80,
      fontFamily: 'SF-Pro-Text-Bold',
      color: 'white',
      textAlign: 'center',
    },
    title1: {
      fontSize: 28,
      fontFamily: 'SF-Pro-Text-Semibold',
      color: 'title'
    },
    title2: {
      fontSize: 24,
      lineHeight: 30,
      fontFamily: 'SF-Pro-Text-Semibold',
      color: 'title'
    },
    body: {
      fontSize: 16,
      lineHeight: 24,
      fontFamily: 'SF-Pro-Text-Regular',
      color: 'body'
    }
  },
  breakpoints: {},
};

export const Text = createText<Theme>();
export type Theme = typeof theme;
export default theme;
