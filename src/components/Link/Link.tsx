import * as React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';
import Typography, { TypographyProps } from '@material-ui/core/Typography';

interface CustumLinkInterface extends TypographyProps {
  text: string;
  path: string;
}

const useStyles = makeStyles((theme) => ({
  root: {
    marginLeft: theme.spacing(3),
    [theme.breakpoints.down('sm')]: {
      marginLeft: theme.spacing(2),
    },
  },
}));

const CustomLink = (props: CustumLinkInterface) => {
  const classes = useStyles();
  const { text, path, ...rest } = props;

  return (
    <Typography className={classes.root} {...rest}>
      <Link href={path} color="secondary">
        {text}
      </Link>
    </Typography>
  );
};

export default CustomLink;
