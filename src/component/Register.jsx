import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import RegisterService from '../services/RegisterService';
class Register extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      email : props.email,
      firstName : props.firstName,
      lastName : props.lastName,
      phone : props.phone,
      password : props.password
    }
  }
handleEmailChange = (e) => {
    this.setState({email: e.target.value});
 }
 handleFirstNameChange = (e) => {
  this.setState({firstName: e.target.value});
}
handleLastNameChange = (e) => {
  this.setState({lastName: e.target.value});
}
handlePhoneChange = (e) => {
  this.setState({phone: e.target.value});
}
handlePasswordChange = (e) => {
  this.setState({password: e.target.value});
}

  onButtonClick = () => {
    console.log("on click");
    let userData = {
      firstName : this.state.firstName,
      lastName : this.state.lastName,
      emailId : this.state.email,
      password : this.state.password,
      phoneno : this.state.phone
    }
    RegisterService.addUser(userData)
  }

  render(){
    return (
      <div>
        <br></br><br></br>
      <Container component="main" maxWidth="xs">
        <div>
          <form noValidate>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="fname"
                  name="firstName"
                  variant="outlined"
                  required
                  fullWidth
                  label="First Name"
                  value={this.state.firstName} 
                  onChange={this.handleFirstNameChange}
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  label="Last Name"
                  name="lastName"
                  value={this.state.lastName} 
                  onChange={this.handleLastNameChange}
                  autoComplete="lname"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  label="Email Address"
                  name="email"
                  value={this.state.email} 
                  onChange={this.handleEmailChange}
                  autoComplete="email"
                />
                </Grid>
                <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  label="Phone Number"
                  name="phoneNumber"
                  value={this.state.phone} 
                  onChange={this.handlePhoneChange}
                  autoComplete="Phone number"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  value={this.state.password} 
                  onChange={this.handlePasswordChange}
                  autoComplete="current-password"
                />
              </Grid>
            </Grid>
            <br></br>
              <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              onClick={this.onButtonClick}
            >
              Sign Up
            </Button>
            <Grid container justify="flex-end">
              <Grid item>
                <Link href="#" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
      </Container>
      </div>
    );
    }
}

export default Register