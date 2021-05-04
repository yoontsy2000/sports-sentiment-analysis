import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';


export default function Login() {

  // const classes = useStyles();
  // const theme = useTheme();

  return (
    <div className="main">
      <form className="form">
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
        />
        <Button color="secondary">
          Login
        </Button>
        <Link href="/register" variant="body2">
          Don't have an account? Register here!
        </Link>
      </form>
      
    </div>
  )
}