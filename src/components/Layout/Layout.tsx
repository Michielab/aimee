import * as React from 'react';
import { ThemeProvider, makeStyles } from '@material-ui/core/styles';
import theme from '../../theme/Theme';
import '../../styles/global.css';
import { Scrollbars } from 'react-custom-scrollbars';

// import components
import Header from '../Header/Header';
import HeaderMobile from '../Header/HeaderMobile';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.primary.main,
    display: 'flex',
    flexGrow: 1,
    flexDirection: 'column',
    height: '100vh',
    opacity: 1,
    // marginTop: 68,
    // [theme.breakpoints.down('sm')]: {
    //   height: '100vh',
    // },
  },
  container: {
    display: 'flex',
    flexGrow: 1,
    paddingTop: 68,
  },
  innerContainer: {
    display: 'flex',
    flexGrow: 6,
    justifyContent: 'center',
    [theme.breakpoints.down('sm')]: {
      paddingBottom: theme.spacing(4),
    },
  },
  mobileHeaderWrapper: {
    display: 'none',
    [theme.breakpoints.down('sm')]: {
      display: 'unset',
    },
  },
  headerWrapper: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'unset',
    },
  },
  scrollBar: {
    [theme.breakpoints.down('sm')]: {
      // display: 'none',
    },
  },
}));

const Layout = (props) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Scrollbars autoHide className={classes.scrollBar}>
        <div className={classes.headerWrapper}>
          <Header />
        </div>
        <div className={classes.mobileHeaderWrapper}>
          <HeaderMobile />
        </div>
        <main className={classes.container}>
          <div className={classes.innerContainer}>{props.children}</div>
        </main>
      </Scrollbars>
    </div>
  );
};

const WrappedLayout = (props) => {
  return (
    <ThemeProvider theme={theme}>
      <Layout>{props.children}</Layout>
    </ThemeProvider>
  );
};

export default WrappedLayout;
