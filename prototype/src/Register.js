import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

// const useStyles = makeStyles((theme) => ({
//   paper: {
//     marginTop: theme.spacing(8),
//     display: 'flex',
//     flexDirection: 'column',
//     alignItems: 'center',
//   },
//   avatar: {
//     margin: theme.spacing(1),
//     backgroundColor: theme.palette.secondary.main,
//   },
//   form: {
//     width: '100%', // Fix IE 11 issue.
//     marginTop: theme.spacing(3),
//   },
//   submit: {
//     margin: theme.spacing(3, 0, 2),
//   },
// }));

export default function Login() {

  // const classes = useStyles();
  // const theme = useTheme();

  // const classes = useStyles();
  return (
    <div className="main">
      <form className="form">
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
        />
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          name="confirm-password"
          label="Confirm Password"
          type="confirm-password"
          id="confirm-password"
        />
        <Button className="registerbutton" color="secondary">
          Register
        </Button>
        <Link href="/login" variant="body2">
          Already have an account? Login here!
        </Link>
      </form>
    </div>
  )
}