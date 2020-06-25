export const theme: DefaultTheme = {
  colors: {
    background: 'radial-gradient(rgb(88, 57, 173),rgb(23, 21, 144))',
    black: '#282c34',
    deepBlue: 'rgb(99, 76, 230)',
    blue: '#a0e9fd',
    lightBlue: '#caf3fe',
    white: '#fff',
  },
  transition: '0.3s',
};

interface DefaultTheme {
  colors: {
    background: string;
    black: string;
    deepBlue: string;
    blue: string;
    lightBlue: string;
    white: string;
  };
  transition: string;
}
