import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import ToneChart from './ToneChart';
import axios from 'axios';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Chip from '@material-ui/core/Chip';
import DoneIcon from '@material-ui/icons/Done';
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

export default function Dashboard(props) {

  const classes = useStyles();

  const [email, setEmail] = useState("");
  const [tones, setTones] = useState([]);
  const [query, setQuery] = useState("")
  const [teams, setTeams] = useState([]);
  const [data, setData] = useState([])
  const url = 'http://127.0.0.1:5000'

  useEffect(() => {
    loadData();
  }, [])

  const loadData = () => {
    setEmail(props.email)
    getTeams(email)
  }

  const getTones = () => {
    axios.get(`${url}/tone`, {
      params: {
        search: query
      }
    }).then(response => {
      console.log(response.data)
      setTones(response.data.tones)
    }).then(() => {

    })
    .catch(error => console.log(error))
  }

  const getTeams = (email) => {
    axios.get(`${url}/api/sports/favs`, {
      params: {
        email: props.email
      }
    }).then(response => {
      console.log(response.data)
      setTeams(response.data)
    })
  }

  const searchTones = (event) => {
    event.preventDefault();
    console.log('Pressed')
    console.log('Running search', query)
    getTones();
  }

  const onChangeHandler = (event) => {
    const {name, value } = event.currentTarget;
    setQuery(value)
  }

  const handleDelete = (team) => {
    console.log("Team", team)
    console.log("Email", email)
    axios.post(`${url}/api/sports/favs/delete`, {
      params: {
        email: email,
        teamName: team
      }
    }).then((res) => {
      console.log(res)
      setTeams()
    })
  };

  return (
    <div>
      {/* {!props.email && loadData()} */}
      <Navbar />
      <div>
        <div className={classes.form}>
          <ul>
            {tones && tones.map(tone => (
              <li>{tone.tone_name}, {tone.score}</li>
            ))}
          </ul>
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
            </Button> { teams && teams.map(team => (
                <Chip
                  label={team}
                  onDelete={() => handleDelete(team)}
                />)
                )
            }
          </form>
          <div>
            
          </div>
        </div>
      </div>
    </div>
  )
}