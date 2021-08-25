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
    // marginTop: theme.spacing(3),
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
        <Typography
          variant={smallUp ? 'h5' : mediumUp ? 'h4' : 'subtitle1'}
          color="secondary"
          className={classes.title}
        >
          Recordings
        </Typography>
        <div className={classes.container}>
          {recordings.map((recording) => {
            return (
              <div className={classes.containerRecording}>
                <Typography
                  variant={smallUp ? 'h6' : mediumUp ? 'h6' : 'subtitle1'}
                >
                  {recording.title}
                </Typography>
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
            // return <Project {...recording} key={recording.id} />;
          })}
        </div>
      </div>
    </Layout>
  );
};

export default Recordings;
