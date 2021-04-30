import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Box from '@material-ui/core/Box'
import Container from '@material-ui/core/Container'
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

import UsersList from './UsersList'
import { loadUsers } from '../../redux/actions/usersActions';

const Users = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadUsers());
  }, [dispatch]);

  return (
    <Container maxWidth="md">
      <Box mt={4} clone>
        <Paper >
          <Box p={2} clone>
            <Typography variant='h3'>Users</Typography>
          </Box>
          <UsersList />
        </Paper>
      </Box>
    </Container>
  )
};

export default Users;
