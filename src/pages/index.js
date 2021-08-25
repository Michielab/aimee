import { makeStyles } from '@material-ui/core';
import * as React from 'react';
import Layout from '../components/Layout/Layout';
import Typography from '../components/Typography/Typography';
import Metropolis from '../images/Audiovisual/synchronicity/synchronicity1.jpg';
import Link from '../components/Link/Link';

const useStyles = makeStyles((theme) => ({
  root: {
    height: 'calc(100vh - 100px)',
    padding: theme.spacing(2),
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  textContainer: {
    margin: theme.spacing(2),
    marginLeft: 0,
    marginRight: 0,
  },
  textUnderline: {
    textDecoration: 'underline',
    color: ' burlywood !important',
    marginLeft: 0,
  },
  imageContainer: {
    [theme.breakpoints.up('sm')]: {
      maxWidth: '800px',
    },
  },
  image: {
    width: '100%',
  },
  footer: {
    display: 'none',
    [theme.breakpoints.down('sm')]: {
      height: 68,
      display: 'block',
    },
  },
}));

const Index = (props) => {
  const classes = useStyles();

  return (
    <Layout>
      <div className={classes.root}>
        {/* <div className={classes.textContainer}>
          <div>
            <Typography color="secondary" variant="h5" display="inline">
              Meow, I'm{' '}
              {
                <Link
                  path="/projects"
                  // color="secondary"
                  variant="h5"
                  display="inline"
                  className={classes.textUnderline}
                >
                  Aimée
                </Link>
              }
              ,
            </Typography>
            <Typography color="secondary" variant="h5" display="inline">
              {' '}
              I like{' '}
              {
                <Typography
                  color="secondary"
                  variant="h5"
                  display="inline"
                  className={classes.textUnderline}
                >
                  sounds
                </Typography>
              }{' '}
              and{' '}
              {
                <Typography
                  color="secondary"
                  variant="h5"
                  display="inline"
                  className={classes.textUnderline}
                >
                  writing
                </Typography>
              }{' '}
              and writing about sounds.
            </Typography>
          </div>
          <div></div>
          <div className={classes.textContainer}>
            <Typography color="secondary">
              I'm an occasional goat whisperer, full-time dog lover, but most of
              all your communist queen. I'm quite bad at Mario Kart, but for the
              rest I'm pretty amazing at everything. Other than that I'm very
              humble. I'm just a really great person. But watch out, I do{' '}
              {
                <Typography color="secondary" variant="h5" display="inline">
                  bite!
                </Typography>
              }
            </Typography>
          </div>
        </div> */}
        <div className={classes.imageContainer}>
          <img src={Metropolis} className={classes.image} />
        </div>
        <div className={classes.footer}></div>
      </div>
    </Layout>
  );
};

export default Index;
