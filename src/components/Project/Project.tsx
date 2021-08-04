import * as React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import ReactPlayer from 'react-player';
import Typography from '../Typography/Typography';
import { Document, Page } from 'react-pdf';
import { useState } from 'react';
import useMediaQuery from '@material-ui/core/useMediaQuery';

const useStyles = makeStyles((theme) => ({
  container: {
    flex: '1',
    display: 'flex',
    flexDirection: 'column',
    // alignItems: 'center',
    padding: theme.spacing(2),
    '& > *': {
      zIndex: 100,
    },
    '& > :last-child': {
      marginBottom: theme.spacing(3),
    },
    [theme.breakpoints.up('md')]: {
      maxWidth: '800px',
    },
  },
  title: {
    [theme.breakpoints.up('md')]: {
      fontWeight: 700,
      fontSize: '2rem',
      marginTop: theme.spacing(2),
    },
  },
  medium: {
    marginTop: theme.spacing(1),
  },
  text: {
    marginTop: theme.spacing(3),
    textAlign: 'justify',
    [theme.breakpoints.up('sm')]: {
      // width: '50%',
    },
    // display: 'block',
  },
  playerWrapper: {
    marginTop: theme.spacing(3),
    [theme.breakpoints.down('sm')]: {
      position: 'relative',
      paddingTop: '56.25%' /* 720 / 1280 = 0.5625 */,
      width: '100%',
      // paddingTop: '3.25%',
    },
    [theme.breakpoints.up('sm')]: {
      marginRight: 'auto',
      marginLeft: 'auto',
    },
  },
  reactPlayer: {
    overflow: 'hidden',

    [theme.breakpoints.down('sm')]: {
      // overflow: 'unset',
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100% !important',
      height: '100% !important',
      objectFit: 'contain',
    },
  },
  imageContainer: {
    marginTop: theme.spacing(3),
    [theme.breakpoints.up('sm')]: {
      // width: '50%',
    },
  },
  topMargin: {
    marginTop: '5px',
  },
  image: {
    [theme.breakpoints.down('sm')]: {
      width: '100%',
    },
    [theme.breakpoints.up('sm')]: {
      maxWidth: '50%',
      // padding: '0px 2px',
    },
  },
  link: {
    display: 'block',
    color: theme.palette.primary.contrastText,
    marginBottom: theme.spacing(3),
  },
}));

const Project = (props) => {
  const classes = useStyles();
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const theme = useTheme();
  const mediumUp = useMediaQuery(theme.breakpoints.up('md'));
  const smallUp = useMediaQuery(theme.breakpoints.up('sm'));

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }
  const {
    text,
    previewLink = '',
    title,
    medium,
    subText,
    externalLink,
    images = false,
    pdf = false,
    type,
  } = props;

  console.log('images', images);
  return (
    <div className={classes.container}>
      <Typography
        variant={smallUp ? 'h5' : mediumUp ? 'h4' : 'subtitle1'}
        color="secondary"
        className={classes.title}
      >
        {title}
      </Typography>
      {medium && (
        <Typography
          color="secondary"
          className={classes.medium}
          variant={mediumUp ? 'body1' : 'body2'}
        >
          {medium}
        </Typography>
      )}
      {previewLink && (
        <div className={classes.playerWrapper}>
          <ReactPlayer
            url={previewLink}
            className={classes.reactPlayer}
            // style={{ width: '100%', height: '100%' }}
          />
        </div>
      )}
      {/* {pdf && (
        <iframe
          src={`https://drive.google.com/viewerng/viewer?url=${'https://cc-catalogo.org/site/pdf/Misofonia00-PDF.pdf'}?pid=explorer&efh=false&a=v&chrome=false&embedded=true`}
          width="400px"
          height="300px"
        />
        // <Document
        //   file=""
        //   onLoadSuccess={onDocumentLoadSuccess}
        // >
        //   <Page pageNumber={pageNumber} />
        // </Document>
      )} */}
      {images && (
        <div
          // className={`${classes.imageContainer} ${
          //   previewLink ? classes.topMargin : ''
          // }`}
          className={classes.imageContainer}
        >
          {images.map((img) => {
            return <img key={img} src={img} className={classes.image} />;
          })}
        </div>
      )}

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
          {
            <a href={externalLink} target="_blank" className={classes.link}>
              {/* External link:  */}
              {title}
            </a>
          }
        </Typography>
      )}
    </div>
  );
};

export default Project;
