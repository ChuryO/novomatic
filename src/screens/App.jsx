import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';

import TopBar from './_shared/TopBar';
import Footer from './_shared/Footer';
import AddUser from "./users/AddUser";
import EditUser from "./users/EditUser";
import Users from "./users";

const useStyles = makeStyles(() => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#EEF0F1',
    minHeight: 'calc(100vh - 40px)'
  },
}));

const App = () => {
  const classes = useStyles();

  return (
    <Router>
      <div className={ classes.container }>
        <TopBar />
        <Route path="/" component={ Users } exact />
        <Route path="/add" component={ AddUser } />
        <Route path="/user/:id" component={ EditUser } />
      </div>
      <Footer />
    </Router>
  )
};

export default App;
