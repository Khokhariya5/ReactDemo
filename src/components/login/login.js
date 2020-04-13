import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import Button from '@material-ui/core/Button';  

export default function Login() {
 
    const [values, setValues] = React.useState({
        email: '',
        password: '',
        otp: '',
        showPassword: false,
        showSentEmail: false
      });
    
      const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
      };
    
      const handleClickShowPassword = () => {
        setValues({ ...values, showPassword: !values.showPassword });
      };

      const handleMouseDownPassword = (event) => {
        event.preventDefault();
      };

      const clickForgot = () => {
        setValues({showSentEmail: true})
      }
  return (
    <div>
      <Grid container>
        <Grid item xs={12}>
          <Paper>
          <Container>
            <br/>
            <form autoComplete="off">
                <TextField id="standard-basic1" sm={4} label="Email" />
                { (values.showSentEmail)?<br/>: undefined }
                { (values.showSentEmail)?<br/>: undefined }
                {
                  (values.showSentEmail)?"OTP is sent on your email.": undefined
                }
                { (values.showSentEmail)?<br/>: undefined }
                {
                  (values.showSentEmail)?<TextField key="A5" id="standard-mobile"  name="otp" type="number" label="OTP" value={values.otp} />: undefined
                }
                <br/>
                <br/>
                <TextField id="standard-basic2" type="password" label="Password" />
                <br/>
                <br/>
                <Link href="#" onClick={clickForgot}>
                    Forgot Password ?
                </Link>
                <br/>
                <br/>
                <Button variant="contained" color="primary">
                    Login
                </Button>
                <br/>
                <br/>
            </form>
            </Container>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}