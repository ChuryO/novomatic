import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  footer: {
    backgroundColor: '#E1E4E5',
    minHeight: 38,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderTop: '2px solid #C1C6C8',
  },
  copyright: {
    color: '#607D8B',
    letterSpacing: '2px',
    textTransform: 'uppercase',
    fontSize: 12,
    lineHeight: '16px'
  }

}));

export default function Footer() {
  const classes = useStyles();

  return (
    <footer className={ classes.footer }>
      <Typography className={ classes.copyright }>
        © Users app
      </Typography>
    </footer>
  );
}
