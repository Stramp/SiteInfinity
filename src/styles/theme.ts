export default {
  grid: {
    container: '114rem',
    gutter: '2.2rem'
  },
  border: {
    radius: '0.5rem'
  },
  font: {
    family: "'Nunito'",
    normal: 400,
    semiBold: 600,
    bold: 700,
    black: 900,
    sizes: {
      xsmall: '1rem',
      small: '1.1rem',
      medium: '1.2rem',
      xmedium: '1.3rem',
      xxmedium: '1.4rem',
      xxxmedium: '1.6rem',
      large: '1.8rem',
      xlarge: '2.2rem',
      xxlarge: '3rem'
    }
  },
  colors: {
    primary: '#000',
    secondary: '#F8475F',
    mainBg: '#fff',
    white: '#fff',
    black: '#000',
    gray0: '#F2F2F2',
    gray1: '#E6E8EA',
    gray2: '#C0C0C0',
    gray3: '#BFBFBF',
    gray4: '#BDBDBD',
    gray5: '#7A7A7A',
    gray6: '#585858'
  },
  spacings: {
    xxsmall: '0.8rem',
    xsmall: '1.6rem',
    small: '2.4rem',
    medium: '3.2rem',
    large: '4.0rem',
    xlarge: '4.8rem',
    xxlarge: '5.6rem'
  },
  layers: {
    base: 10,
    menu: 20,
    overlay: 30,
    modal: 40,
    alwaysOnTop: 50
  }
} as const
