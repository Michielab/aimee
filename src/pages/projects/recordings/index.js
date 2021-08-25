import * as React from 'react';
import Layout from '../../../components/Layout/Layout';
import { recordings } from '../../../components/Projects/ProjectsData';
import Typography from '../../../components/Typography/Typography';
import Link from '../../../components/Link/Link';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    [theme.breakpoints.down('sm')]: {
      padding: ' 0px 16px',
    },

    // marginTop: theme.spacing(3),
    // alignItems: 'center',
  },
  containerRecording: {
    marginTop: theme.spacing(3),
  },
  title: {
    [theme.breakpoints.up('md')]: {
      fontWeight: 600,
      fontSize: '2rem',
      marginTop: theme.spacing(2),
    },
  },
  imageContainer: {
    marginTop: theme.spacing(1),
    // width: 300,
    // position: 'relative',
    // paddingTop: '56.25%' /* 720 / 1280 = 0.5625 */,
    // width: '100%',
  },
  image: {
    objectFit: 'fill',
    height: 200,
    width: 200,
    textAlign: 'center',
    // position: 'absolute',
    // top: 0,
    // left: 0,
    // width: '100% !important',
    // height: '100% !important',
    // objectFit: 'contain',
    // [theme.breakpoints.down('sm')]: {
    //   width: '100%',
    // },
    // [theme.breakpoints.up('sm')]: {
    //   maxWidth: '100%',
    //   objectFit: 'contain',
    //   marginTop: theme.spacing(2),
    //   // padding: '0px 2px',
    // },
  },
  link: {
    textDecoration: 'underline',
    display: 'inline',
  },
}));

const Recordings = (props) => {
  const classes = useStyles();
  const theme = useTheme();
  const mediumUp = useMediaQuery(theme.breakpoints.up('md'));
  const smallUp = useMediaQuery(theme.breakpoints.up('sm'));

  return (
    <Layout>
      <div>
        <div className={classes.container}>
          {recordings.map((recording) => {
            return (
              <div className={classes.containerRecording}>
                <Typography
                  variant={smallUp ? 'h6' : mediumUp ? 'h6' : 'subtitle1'}
                >
                  {recording.title}
                </Typography>
                <div className={classes.imageContainer}>
                  <img src={recording.image} className={classes.image} />
                </div>
                <Link
                  noMargin={true}
                  path={recording.externalLink}
                  external={true}
                  className={classes.link}
                >
                  Listen to the recording here
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </Layout>
  );
};

export default Recordings;
