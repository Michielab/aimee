import * as React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'fixed',
    top: 0,
    left: 0,
    backgroundColor: '#CB1D10',
    width: '100%',
    height: 100,
    display: 'flex',
    alignItems: 'center',
    // padding: '16px',
    // mobile code
  },
}));

const Project = (props) => {
  const classes = useStyles();
  const { children } = props;
  return <div className={classes.root}>{children}</div>;
};

export default Project;
