import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import Box from '@material-ui/core/Box'
import Container from '@material-ui/core/Container'
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from "@material-ui/core/styles";

import { useHistory } from "react-router-dom";


import UsersList from './UsersList'
import { loadUsers } from '../../redux/actions/usersActions';
import { Button, Grid } from "@material-ui/core";
import { Add } from "@material-ui/icons";

const useStyles = makeStyles(() => ({
  container: {
    maxWidth: 1232,
    marginTop: 48
  },
  content: {
    padding: '20px 42px'
  },
  addButton: {
    backgroundColor: '#617D8B'
  }
}));

const Users = () => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const history = useHistory();

  useEffect(() => {
    dispatch(loadUsers());
  }, [dispatch]);

  return (
    <Container
      maxWidth={ false }
      className={ classes.container }
    >
      <Box>
        <Paper>
          <Grid
            container
            justify="space-between"
            alignItems="center"
            className={ classes.content }
          >
            <Grid item>
              <Typography component="h1" variant="h5">
                Users
              </Typography>
            </Grid>
            <Grid item>
              <Button
                variant="contained"
                color="secondary"
                className={ classes.addButton }
                startIcon={ <Add /> }
                mx={ 3 }
                onClick={ () => history.push('/add') }
              >
                ADD USER
              </Button>
            </Grid>
            <Grid
              item
              xs={ 12 }
            >
              <UsersList />
            </Grid>
          </Grid>
        </Paper>
      </Box>
    </Container>
  )
};

export default Users;
