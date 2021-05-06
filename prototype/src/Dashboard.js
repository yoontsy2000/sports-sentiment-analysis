import React, { useContext, useState } from 'react';
import Navbar from './Navbar';
import ToneChart from './ToneChart';
import axios from 'axios';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  form: {
    margin: "auto",
    display: "flex",
    flexDirection: "column",
    background: "white",
    padding: "40px",
    marginTop: "30px",
  },
  chart: {
    margin: "auto",
    marginTop: "30px",
  }
}));

export default function Dashboard() {

  const classes = useStyles();

  const [tones, setTones] = useState([]);
  const [query, setQuery] = useState("")
  const [data, setData] = useState([])
  const url = 'http://127.0.0.1:5000'

  const getTones = () => {
    axios.get(`${url}/tone`, {
      params: {
        search: query
      }
    }).then(response => {
      console.log(response.data)
      setTones(response.data.tones)
      tones.forEach()
    })
    .catch(error => console.log(error))
  }

  const searchTones = (event) => {
    event.preventDefault();
    console.log('Pressed')
    getTones();
  }

  const onChangeHandler = (event) => {
    const {name, value } = event.currentTarget;
    console.log(`${name}: ${value}`)
    setQuery(value)
  }

  return (
    
    <div>
      <Navbar />
      <div>
        <div className={classes.chart}>
          <ToneChart/>
        </div>
        <div className={classes.form}>
          Enter your query here:
          <form onSubmit={searchTones}>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="query"
              label="Search tags"
              name="query"
              autoFocus
              onChange={onChangeHandler}
          />
            <Button color="secondary" onClick = {searchTones}>
              Search
            </Button>
          </form>
            {
              tones && tones.map(tone => (
                <div>
                  <h1>{tone.tone_name} {tone.score}</h1>
                </div>
              ))
            }
        </div>
      </div>
    </div>
  )
}