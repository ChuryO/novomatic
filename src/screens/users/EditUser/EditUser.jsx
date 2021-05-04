import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import ArrowBackIosOutlinedIcon from '@material-ui/icons/ArrowBackIosOutlined';
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import {
  Box,
  Button,
  Container,
  IconButton,
  makeStyles,
  Paper,
  TextField,
  Typography
} from "@material-ui/core";
import { loadUser } from "../../../redux/actions/userActions";
import { createUser } from "../../../redux/actions/userActions";
import { useDispatch, useSelector } from "react-redux";

const useStyles = makeStyles(theme => ({
  container: {
    padding: 24,
    marginTop: 48
  },
  headingNavigation: {
    display: 'flex',
    alignItems: 'center',
  },
  paper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    marginLeft: 33
  },
  form: {
    width: '100%',
  },
  buttons: {
    marginTop: 20,
    display: 'flex',
    justifyContent: 'flex-end',
  },
  submit: {
    marginLeft: 16,
    letterSpacing: 1.25,
  },
  cancel: {
    color: "#546E7A",
    letterSpacing: 1.25,
  }
}));

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "rgba(0,0,0,0.32)",
    },
    secondary: {
      main: "#617D8B",
    },
  },
});

const EditUser = ({ match }) => {
  const dispatch = useDispatch();

  const classes = useStyles();
  const history = useHistory();
  const [submitted, setSubmitted] = useState(false);
  const [userData, setUserData] = useState({
    name: '',
    surname: '',
    email: ''
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setUserData(userData => ({ ...userData, [name]: value }));
  }
  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
    dispatch(createUser(userData));
    history.push('/')
  }

  const user = useSelector(state => state);
  useEffect(() => {
    dispatch(loadUser( match.params.id));
  }, [dispatch]);

  return (


    <Container
      component="main"
      maxWidth="sm"
    >
      <Box>
        <Paper
          className={ classes.container }
          elevation={ 2 }
          square
        >
          <div className={ classes.headingNavigation }>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={ () => history.goBack() }
            >
              <ArrowBackIosOutlinedIcon fontSize="small" />
            </IconButton>
            <Typography component="h1" variant="h5">
              New user details
            </Typography>
          </div>
          <div className={ classes.paper }>
            <form
              onSubmit={ handleSubmit }
              className={ classes.form }
              noValidate
            >
              <ThemeProvider theme={ theme }>
                <TextField
                  name="name"
                  label="Name"
                  variant="outlined"
                  margin="normal"
                  onChange={ handleChange }
                  fullWidth
                />
                <TextField
                  name="surname"
                  label="Surname"
                  variant="outlined"
                  margin="normal"
                  onChange={ handleChange }
                  fullWidth
                />
                <TextField
                  name="email"
                  label="Email"
                  variant="outlined"
                  margin="normal"
                  onChange={ handleChange }
                  fullWidth
                />
                <div className={ classes.buttons }>
                  <Button
                    onClick={ () => history.goBack() }
                    className={ classes.cancel }
                  >
                    Cancel
                  </Button>
                  <Button
                    type="submit"
                    variant="contained"
                    color="secondary"
                    className={ classes.submit }
                    disabled={ !userData.name || !userData.surname || !userData.email
                      // || submitted
                    }
                  >
                    SUBMIT TO REVIEW
                  </Button>
                </div>
              </ThemeProvider>
            </form>
          </div>
        </Paper>
      </Box>
    </Container>
  )
};

export default EditUser;
