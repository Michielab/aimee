import { makeStyles } from '@material-ui/core';
import * as React from 'react';
import Layout from '../../components/Layout/Layout';
import Typography from '../../components/Typography/Typography';
import Link from '../../components/Link/Link';

const useStyles = makeStyles((theme) => ({
  root: {
    // backgroundColor: theme.palette.primary.main,
    height: 'calc(100vh - 68px)',
    padding: theme.spacing(2),
  },
  textContainer: {
    margin: theme.spacing(2),
    marginLeft: 0,
    marginRight: 0,
  },
  textUnderline: {
    textDecoration: 'underline',
    color: ' burlywood',
  },
  image: {
    width: '100%',
  },
}));

const Index = (props) => {
  const classes = useStyles();

  return (
    <Layout>
      <div className={classes.root}>
        <div className={classes.textContainer}>
          <div>
            <Typography color="secondary" variant="h5" display="inline">
              Meow, I'm{' '}
              {
                <Typography
                  color="secondary"
                  variant="h5"
                  display="inline"
                  className={classes.textUnderline}
                >
                  Aimée
                </Typography>
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
        </div>
      </div>
    </Layout>
  );
};

export default Index;
