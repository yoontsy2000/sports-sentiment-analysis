import axios from 'axios';
import React, { useContext, useState } from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

export default function Login() {

  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [password2, setPassword2] = useState('');
  const [error, setError] = useState(false);

  const onChangeHandler = (event) => {
    const { name, value } = event.currentTarget;
    switch (name) {
      case 'email':
        setEmail(value);
        break;
      case 'name':
        setName(value);
        break;
      case 'password':
        setPassword(value);
        break;
      case 'password2':
        setPassword2(value);
        break;
      default:
        break;
    }
    console.log(`Changed state of ${name} to ${value}`)
  }

  const register = async (userData) => {
    return axios.post('http://127.0.0.1:5000/api/users/register',
      userData,
      {headers: {'Content-Type': 'application/json'}}
    ).then(() => {
      console.log("True")
      setError(false)
    }).catch(() => {
      console.log("Fail")
      setError(true)
    })
  }

  const onSubmit = (event) => {
    console.log("Submitted!")
    register(userData)
    event.preventDefault();
  }

  const userData = {
    name: name,
    email: email,
    password: password,
    password2: password2
  }

  return (
    <div className="main">
      {
        error &&
        <h2>Failed</h2>
      }
      <form className="form" noValidate>
      <Typography component="h1" variant="h5">
        Sign up
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
          name="name"
          label="Name"
          type="name"
          id="name"
          autoComplete="name"
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
          onChange={onChangeHandler}
        />
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          name="password2"
          label="Confirm Password"
          type="password"
          id="password2"
          onChange={onChangeHandler}
        />
        <Button 
          className="registerbutton" 
          color="secondary" 
          type="submit"
          onClick = {onSubmit}
          >
          Register
        </Button>
        <Link href="/login" variant="body2">
          Already have an account? Login here!
        </Link>
      </form>
    </div>
  )
}