import React from 'react';
import { List, ListItem, Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";

const useStyles = makeStyles(() => ({
  itemLink: {
    padding: 16,
    width: '100%',
    display: "flex",
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    alignItems: 'center',
    textDecoration: 'none'
  },
  itemImage: {
    maxHeight: 84
  }
}));

const UserItemComponent = (props) => {
  const { id, email, first_name, last_name, avatar } = props.children;
  const classes = useStyles();
  return (
    <List>
      <Paper variant="outlined">
        <ListItem alignItems="flex-start">
          <Link
            to={ `/user/${ id }` }
            className={ classes.itemLink }
          >
          <span>
            <Typography variant="body2" color="textSecondary">
              ID: { id }
            </Typography>
            <Typography gutterBottom variant="h5" color='textPrimary'>
              { first_name } { last_name }
            </Typography>
            <Typography variant="body2" color="textSecondary">
              { email }
            </Typography>
          </span>
            <span>
            <img
              alt={ `${ first_name } ${ last_name }` }
              src={ avatar }
              className={ classes.itemImage }
            />
          </span>
          </Link>
        </ListItem>
      </Paper>
    </List>
  )
};

export { UserItemComponent };