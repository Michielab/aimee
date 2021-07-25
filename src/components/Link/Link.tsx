import * as React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'gatsby';
import Typography, { TypographyProps } from '@material-ui/core/Typography';

interface CustumLinkInterface extends TypographyProps {
  text?: string;
  path: string;
  external?: boolean;
  noMargin?: boolean;
}

const useStyles = makeStyles((theme) => ({
  root: ({ noMargin = false }: CustumLinkInterface) => ({
    wordBreak: 'break-word',
    whiteSpace: 'normal',
    width: '100%',
    marginLeft: noMargin ? theme.spacing(0) : theme.spacing(2),

    // [theme.breakpoints.down('sm')]: {
    //   marginLeft: noMargin ? theme.spacing(0) : theme.spacing(2),
    // },
    '& > a': {
      color: theme.palette.primary.contrastText,
      textDecoration: 'none',
      display: 'block',
    },
  }),
}));

const CustomLink = (props: CustumLinkInterface) => {
  const classes = useStyles(props);
  const { text, path, external, className, ...rest } = props;

  return (
    <Typography className={`${classes.root} ${className}`} {...rest}>
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
