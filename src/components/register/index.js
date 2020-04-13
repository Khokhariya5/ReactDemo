import React, { createContext, useContext, useState } from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';

import Register from './register';

export default function Index() {

  return (
    <div>
      <Grid container>
        <Grid item xs={12}>
          <Paper>
          <Container>
          <br />
             <Register />
           </Container>
          </Paper> 
        </Grid>
      </Grid>
    </div>
  );
}

