import { createMuiTheme } from '@material-ui/core/styles';
import purple from '@material-ui/core/colors/purple';
import green from '@material-ui/core/colors/green';

const theme = createMuiTheme({
  typography: {
    fontFamily: `Montserrat`,
  },
  palette: {
    primary: {
      // light: will be calculated from palette.primary.main,
      main: '#FFFFFF',
      // dark: will be calculated from palette.primary.main,
      // contrastText: will be calculated to contrast with palette.primary.main
      contrastText: '#000000',
    },
    secondary: {
      light: '#000000',
      main: '#000000',
      // dark: will be calculated from palette.secondary.main,
      contrastText: '#000000',
    },
  },
});

export default theme;
