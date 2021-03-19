import { ThemeProvider } from 'styled-components';
import { darkTheme, defaultTheme } from '../src/utils';

export const contexts = [
  {
    icon: 'box',
    title: 'Themes',
    components: [ThemeProvider],
    params: [
      {
        name: 'Default Theme',
        props: {
          theme: defaultTheme,
          default: true,
        },
      },
      {
        name: 'Dark Theme',
        props: {
          theme: darkTheme,
        },
      },
    ],
    options: {
      deep: true,
      disable: false,
      cancelable: false,
    },
  },
];