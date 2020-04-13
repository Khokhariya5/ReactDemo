import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import Button from '@material-ui/core/Button';  

export default function UploadFile() {
 
    const [values, setValues] = React.useState({
        amount: '',
        password: '',
        weight: '',
        weightRange: '',
        imgSrc: [],
        file: [],
        showPassword: false,
      });
      
      
      const onChange = function(event){
        setValues({ imgSrc: URL.createObjectURL(event.target.files[0]) }); 
      }
    
      const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
      };
    
  

  return (
    <div>
      <Grid container>
        <Grid item xs={9} sm={9}>
            <br/>
            <Button
              variant="contained"
              component="label"
            >
              Upload File
              
              <input type="file" onChange={onChange} style={{display: "none"}} />
            </Button>

            { (values.imgSrc != undefined && values.imgSrc != null && values.imgSrc != '')? values.imgSrc.replace(/^.*[\\\/]/, ''): undefined }
        </Grid>
        <Grid item xs={3} sm={3}>
            { (values.imgSrc != undefined && values.imgSrc != null && values.imgSrc != '')?<img src={values.imgSrc} style={{ float: "right",height:"100px",width:"100px"}} /> : <div></div> }
        </Grid>
      </Grid>
      <Grid container>
      <Grid item xs={6} sm={6}>
            { (values.imgSrc !== undefined && values.imgSrc !== null && values.imgSrc != '')? "File Uploaded Successfully.": undefined }
        </Grid>
     
        <Grid item xs={6} sm={6}>
            <Button
              variant="contained"
              component="label"
            >
              Submit 
            </Button>
        </Grid>
      </Grid>
      <br/>
    </div>
  );
}