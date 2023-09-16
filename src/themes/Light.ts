import {
  createTheme,
  SimplePaletteColorOptions,
  PaletteColorOptions
} from '@mui/material/styles';

declare module '@mui/material/styles/createPalette' {
  interface SimplePaletteColorOptions {
    medium: string;
  }
  interface PaletteColor {
    medium: string;
  }
}

declare module '@mui/material/styles' {
  interface Palette {
    highlight: SimplePaletteColorOptions;
    high: SimplePaletteColorOptions;
    low: SimplePaletteColorOptions;
  }
  interface PaletteOptions {
    highlight: PaletteColorOptions;
    high: PaletteColorOptions;
    low: PaletteColorOptions;
  }
}

export const LightTheme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920
    }
  },
  palette: {
    primary: {
      main: '#fff',
      light: '#9D9FAA',
      medium: '#686B78',
      dark: '#000000',
      contrastText: '#FFFFFF'
    },
    highlight: {}, // Add the highlight property
    high: {}, // Add the high property
    low: {} // Add the low property
  }
});
