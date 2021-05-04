import React from 'react';
import { useSelector } from 'react-redux';

import { UserItemComponent } from "../../../components/UserItemComponent";

const UsersList = () => {
  const users = useSelector(state => state.users.data);

  return (
    users.map(user => (
      <UserItemComponent key={ user.id }>
        { user }
      </UserItemComponent>
    ))
  )
};

export default UsersList;
