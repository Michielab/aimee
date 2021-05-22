import { createMuiTheme } from '@material-ui/core/styles';
import purple from '@material-ui/core/colors/purple';
import green from '@material-ui/core/colors/green';

const theme = createMuiTheme({
  palette: {
    primary: {
      // light: will be calculated from palette.primary.main,
      main: '#CB1D10',
      // dark: will be calculated from palette.primary.main,
      // contrastText: will be calculated to contrast with palette.primary.main
      contrastText: '#f2cd05',
    },
    secondary: {
      light: '#f2cd05',
      main: '#f2cd05',
      // dark: will be calculated from palette.secondary.main,
      contrastText: '#f2cd05',
    },
  },
});

export default theme;
