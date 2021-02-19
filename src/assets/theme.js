import { unstable_createMuiStrictModeTheme as createMuiTheme } from '@material-ui/core/styles';

import red from '@material-ui/core/colors/red';
import blue from '@material-ui/core/colors/blue';

const theme = createMuiTheme({
  typography: {
    fontFamily: ['Open Sans'].join(',')
  },
  palette: {
    primary: red,
    secondary: blue
  }
});

export default theme;
