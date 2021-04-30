import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Users from './users';
import TopBar from './_shared/TopBar';

const useStyles = makeStyles(() => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
  },
}));

const App = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <TopBar />
      <Users />
    </div>
  )
};

export default App;
