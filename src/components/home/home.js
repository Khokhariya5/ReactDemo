import React, { useState } from 'react'
import { useHistory } from "react-router-dom";
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Grey from '@material-ui/core/colors/grey';
import Grid from "@material-ui/core/Grid";
import Login from '../login/login';
import Register from '../register/register';
import { Container } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Image from '@material-ui/icons/Image';

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
}));

export default function Home() {
  const classes = useStyles();

  const history = useHistory();

  const [values,setValues] = useState({
    isHover: true,
    btmText: "Get Started"
  })

  function handleClick() {
    history.push("/auth");
  }

  const btnMouseOver = () => {
    setValues({
      btnMouseOver: true,
      btmText: "Login ->"
    })
  }

  const btnMouseOut = () => {
    setValues({
      btnMouseOver: false,
      btmText: "Get Started"
    })
    console.log("aa")
  }


  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            IBHAAN
          </Typography>
        </Toolbar>
      </AppBar>
      <Grid container>
      <Grid item xs={12} sm={4}>
          <Container>
              <Typography xs={12} variant="h2" style={{color: Grey["500"], marginTop: "15%"}}>
                Trusted Certificates
              </Typography>
              <br/>
              <br/>
              <br/>
              <Typography xs={12} variant="h5">
                The authenticity of your acadamic certificatea are validated using Blockchain Technology.The issued Certificates are registered...
              </Typography>
              <br/>
              <br/>
              <Button variant="contained" color="primary" onClick={handleClick} onMouseLeave={btnMouseOut} onMouseOver={btnMouseOver}>
                { values.btmText }
              </Button>
              <br/>
              <br/>
              <br/>
             
          </Container>
          <img
                style={{ height: "300px", left: "5%" }}
                src='/imgpsh.png'
              />
      </Grid>
      <Grid item xs={12} sm={8}>
        <img
          style={{ maxHeight: "60%", position: 'absolute', right: "20%"}}
          src='/imgpsh_fullsize_anim.png'
        />
      </Grid>      
    </Grid>
    </div>
  );
}
