import * as React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';

interface CustumLinkInterface {
  text: string;
  path: string;
}

const useStyles = makeStyles((theme) => ({
  root: {
    marginLeft: theme.spacing(3),
    color: '#f2cd05 !important',
  },
}));

const CustomLink = (props: CustumLinkInterface) => {
  const classes = useStyles();
  const { text, path } = props;

  return (
    <Typography className={classes.root}>
      <Link href={path}>{text}</Link>
    </Typography>
  );
};

export default CustomLink;
