import React from 'react';
import { useSelector } from 'react-redux';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';

const UsersList = () => {
  const users = useSelector(state => state.users.data);

  return (
    <List>
      {users.map(user => (
        <ListItem key={`user-${user.id}`}>
          <ListItemText
            primary={
              <Typography variant="h6">{`${user.first_name} ${user.last_name}`}</Typography>
            }
            secondary={user.email}
          />
        </ListItem>
      ))}
    </List>
  )
};

export default UsersList;
