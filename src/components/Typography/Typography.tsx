import * as React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography, { TypographyProps } from '@material-ui/core/Typography';

interface TypographyInterface extends TypographyProps {}

const useStyles = makeStyles((theme) => ({
  root: {
    // color: '#F2CD05 !important',
  },
}));

const CustomTypography = (props: TypographyInterface) => {
  const classes = useStyles();
  const { ...rest } = props;
  return (
    <Typography classes={{ root: classes.root }} {...rest}>
      {props.children}
    </Typography>
  );
};

export default CustomTypography;
