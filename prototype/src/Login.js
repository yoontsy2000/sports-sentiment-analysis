import axios from 'axios'
import PropTypes from 'prop-types';
import React, { useContext, useState } from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';


export default function Login({ hasAuthenticated, getEmail }) {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  // const classes = useStyles();
  // const theme = useTheme();

  const onChangeHandler = (event) => {
    const { name, value } = event.currentTarget;
    switch (name) {
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;
      default:
        break;
    }
  }

  const login = async (userData) => {
    return axios.post('http://127.0.0.1:5000/api/users/login',
      userData,
      {headers: {'Content-Type': 'application/json'}}
    ).then((res) => {
      hasAuthenticated(res.data.success)
      getEmail(userData.email)
      console.log("Logged in!")
    }).catch((res) => {
      console.log("Login fail!", res)
    })
  }

  const onSubmit = (event) => {
    event.preventDefault();
    console.log("Submitted!")
    login(userData)
  }

  const userData = {
    email: email,
    password: password,
  }

  return (
    <div className="main">
      <form className="form" noValidate>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            onChange={onChangeHandler}
        />
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          name="password"
          label="Password"
          type="password"
          id="password"
          autoComplete="current-password"
          onChange={onChangeHandler}
        />
        <Button color="secondary" onClick = {onSubmit}>
          Login
        </Button>
        <Link href="/register" variant="body2">
          Don't have an account? Register here!
        </Link>
      </form>
    </div>
  )
}

Login.propTypes = {
  hasAuthenticated: PropTypes.func.isRequired,
  getEmail: PropTypes.func.isRequired
}