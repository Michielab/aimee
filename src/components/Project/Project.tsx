import * as React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ReactPlayer from 'react-player';
import Typography from '../Typography/Typography';
import { Document, Page } from 'react-pdf';
import { useState } from 'react';

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
  },
  title: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
  },
  medium: {
    marginBottom: theme.spacing(2),
  },
  text: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    textAlign: 'justify',
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
  imageContainer: {
    marginTop: '5px',
  },
}));

const Project = (props) => {
  const classes = useStyles();
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

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
    images,
    pdf = false,
  } = props;

  console.log('images', images);
  return (
    <div className={classes.container}>
      <Typography color="secondary" className={classes.title}>
        {title}
      </Typography>
      {medium && (
        <Typography
          color="secondary"
          className={classes.medium}
          variant="body2"
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
      <div className={previewLink ? classes.imageContainer : ''}>
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
          External link:{' '}
          {
            <a href={externalLink} target="_blank">
              {title}
            </a>
          }
        </Typography>
      )}
    </div>
  );
};

export default Project;
