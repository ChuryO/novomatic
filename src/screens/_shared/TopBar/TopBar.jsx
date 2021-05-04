import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Container from '@material-ui/core/Container/Container';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { IconButton, Link } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import PeopleAltOutlinedIcon from '@material-ui/icons/PeopleAltOutlined';
import { useHistory } from 'react-router-dom'

const useStyles = makeStyles(() => ({
  container: {
    maxWidth: 1232
  },
  header: {
    backgroundColor: '#617D8B',
    boxShadow: "none"
  },
  toolbar: {
    minHeight: 60,
    padding: 0
  },
  title: {
    fontSize: 24,
    lineHeight: '28px'
  }
}));

export default function TopBar() {
  const classes = useStyles();
  const history = useHistory();

  return (
    <AppBar
      position="static"
      className={ classes.header }
    >
      <Container
        maxWidth={ false }
        className={ classes.container }
      >
        <Toolbar className={ classes.toolbar }>
          <IconButton
            edge="start"
            className='icon'
            color="inherit"
            aria-label="menu"
            onClick={() => history.push("/")}
          >
            <PeopleAltOutlinedIcon />
          </IconButton>
          <Typography
            variant="h6"
            className={ classes.title }
            onClick={() => history.push("/")}
          >
            Users app
          </Typography>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
