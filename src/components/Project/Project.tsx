import * as React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ReactPlayer from 'react-player';
import Typography from '../Typography/Typography';

const useStyles = makeStyles((theme) => ({
  container: {
    flex: '1',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: theme.spacing(2),
    '& > *': {
      zIndex: 100,
    },
  },
  title: {
    margin: theme.spacing(3),
  },
  text: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    textAlign: 'center',
    letterSpacing: '0.01em',
  },
  playerWrapper: {
    position: 'relative',
    paddingTop: '56.25%' /* 720 / 1280 = 0.5625 */,
    width: '100%',
  },
  reactPlayer: {
    overflow: 'hidden',
    position: 'absolute',
    [theme.breakpoints.down('sm')]: {
      overflow: 'unset',
      width: '100% !important',
      height: '100% !important',
      objectFit: 'contain',
      top: 0,
      left: 0,
    },
  },
}));

const Project = (props) => {
  const classes = useStyles();
  const { text, externaLink = '', name } = props;
  return (
    <div className={classes.container}>
      <Typography text={name} color="secondary" className={classes.title} />
      <div className={classes.playerWrapper}>
        <ReactPlayer
          url={externaLink}
          className={classes.reactPlayer}
          // style={{ width: '100%', height: '100%' }}
        />
      </div>
      <Typography text={text} color="secondary" className={classes.text} />
    </div>
  );
};

export default Project;
