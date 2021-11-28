import {red} from '@material-ui/core/colors';
import {createTheme} from '@material-ui/core/styles';

export const theme = createTheme({
  palette: {
    primary: {
      main: '#ffffff',
    },
    secondary: {
      main: '#1a1a1a',
    },
    error: {
      main: red.A400,
    },
  },
});
