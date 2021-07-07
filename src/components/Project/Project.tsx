import * as React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ReactPlayer from 'react-player';
import Typography from '../Typography/Typography';
import { Link } from 'gatsby';

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
  const {
    text,
    previewLink = '',
    title,
    medium,
    subText,
    externalLink,
    images,
  } = props;

  console.log('images', images);
  return (
    <div className={classes.container}>
      <Typography color="secondary" className={classes.title}>
        {title}
      </Typography>
      {/* {medium && (
        <Typography color="secondary" className={classes.title}>
          {medium}
        </Typography>
      )} */}
      {previewLink && (
        <div className={classes.playerWrapper}>
          <ReactPlayer
            url={previewLink}
            className={classes.reactPlayer}
            // style={{ width: '100%', height: '100%' }}
          />
        </div>
      )}
      <div>
        {images &&
          images.map((img) => {
            return <img key={img} src={img} style={{ width: '100%' }} />;
          })}
      </div>
      <Typography color="secondary" className={classes.text}>
        {text}
      </Typography>
      {subText && (
        <Typography color="secondary" className={classes.text}>
          {subText}
        </Typography>
      )}
      {externalLink && (
        <Typography color="secondary" className={classes.text}>
          External link: {<a href={externalLink}>{title}</a>}
        </Typography>
      )}
    </div>
  );
};

export default Project;
