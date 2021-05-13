import * as React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography, { TypographyProps } from '@material-ui/core/Typography';

interface TypographyInterface extends TypographyProps {
  text: string;
}

const useStyles = makeStyles((theme) => ({
  root: {
    // color: '#F2CD05 !important',
  },
}));

const CustomTypography = (props) => {
  const classes = useStyles();
  const { text, ...rest } = props;
  return (
    <Typography className={classes.root} {...rest}>
      {text}
    </Typography>
  );
};

export default CustomTypography;
