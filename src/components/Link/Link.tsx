import * as React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'gatsby';
import Typography, { TypographyProps } from '@material-ui/core/Typography';

interface CustumLinkInterface extends TypographyProps {
  text?: string;
  path: string;
  external?: boolean;
}

const useStyles = makeStyles((theme) => ({
  root: {
    wordBreak: 'break-word',
    whiteSpace: 'normal',
    marginLeft: theme.spacing(3),
    [theme.breakpoints.down('sm')]: {
      marginLeft: theme.spacing(2),
    },
    '& > a': {
      color: theme.palette.primary.contrastText,
      textDecoration: 'none',
    },
  },
}));

const CustomLink = (props: CustumLinkInterface) => {
  const classes = useStyles();
  const { text, path, external, ...rest } = props;

  return (
    <Typography className={classes.root} {...rest}>
      {external ? (
        <a href={path} target="_blank">
          {text || props.children}
        </a>
      ) : (
        <Link to={path}>{text || props.children}</Link>
      )}
    </Typography>
  );
};

export default CustomLink;
