import React, { useState,useEffect } from "react";
import { Snackbar, Alert, Stack, styled, Box, Typography, TextField, Grid } from "@mui/material";
import { Link } from "react-router-dom";
import PrimaryButton from "../../components/inputs/PrimaryButton";
import { useNavigate } from 'react-router-dom';
import { set } from 'idb-keyval';
import { getServiceWorker, subscribeToNotificationService } from "../../client";
import validator from 'validator';
import axios from "axios";
import { useLocation } from "react-router-dom";

const LogInForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [open, setOpen] = useState(false);
  const [isEmailWrong, setIsEmailWrong] = useState(false);
  const [emailHelperText, setEmailHelperText] = useState();
  const [isPasswordWrong, setIsPasswordWrong] = useState(false);
  const [passwordHelperText, setPasswordHelperText] = useState();
  const [alertMessage, setAlertMessage] = useState();
  const [alertSeverity, setAlertSeverity] = useState();
  const navigate = useNavigate();
  const info = useLocation();

  useEffect(() => {
    if(info.state){
      setAlertMessage("Profile created!")
      setAlertSeverity("success")
      setOpen(true)
    }
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const isFormValid = validateInputControls()
      if (isFormValid) {
        const rawResponse = await axios.post(process.env.REACT_APP_URL + '/login', { email: email, password: password });
        const content = await rawResponse.data;
        if (content.token) {
          await set('JWT', { token: content.token, email: email });
          navigate('/start');
        }
      }
    } catch (error) {
      setAlertMessage(error.response.data.msg)
      setAlertSeverity("error")
      setOpen(true)
      console.log(error);
    }

  };

  const validateInputControls = () => {
    let isValid = true;
    if (!validator.isEmail(email)) {
      setIsEmailWrong(true)
      setEmailHelperText("Invalid Email.")
      isValid = false
    } else {
      setIsEmailWrong(false)
      setEmailHelperText("")
    }

    if (!validator.isLength(password, { min: 4 })) {
      setIsPasswordWrong(true)
      setPasswordHelperText("Password must be at least 4 characters long.")
      isValid = false
    } else {
      setIsPasswordWrong(false)
      setPasswordHelperText("")
    }
    return isValid;
  }

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };
  return (
    <Box>
      <Box textAlign="center" mb={3}>
        <Typography variant="h3" color="primary">
          Welcome Back!
        </Typography>
        <Typography variant="h5" sx={{ fontWeight: "normal" }}>Sign in to continue.</Typography>
      </Box>
      <Grid container justifyContent="center" alignItems="center">
        <Grid item lg={6} md={12}>
          <form onSubmit={handleSubmit}>
            <StyledTextField
              label="Email"
              value={email}
              error={isEmailWrong}
              helperText={emailHelperText}
              onChange={(event) => setEmail(event.target.value)}
              fullWidth
              margin="normal"
              InputLabelProps={{
                shrink: true,
              }}
            />
            <StyledTextField
              label="Password"
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              fullWidth
              error={isPasswordWrong}
              helperText={passwordHelperText}
              minRows={4}
              margin="normal"
              InputLabelProps={{
                shrink: true,
              }}
            />
            <Box mt={2}>
              <PrimaryButton
                buttonTxt="Log In"
                type="submit"
                sx={{ width: "100%", py: 1.5, fontSize: "1.1rem" }}
              />
            </Box>
          </form>
        </Grid>
      </Grid>
      <StyledStack>
        <Typography variant="h5"> Don’t have an account?{" "}
          <Link to="/signup" style={{ color: "white" }}>
            Sign Up
          </Link>
        </Typography>
      </StyledStack>
      <Snackbar open={open} autoHideDuration={3000} onClose={handleClose} anchorOrigin={{ vertical: 'top', horizontal: 'center' }}>
        <Alert onClose={handleClose} severity={alertSeverity} sx={{ width: '100%', fontSize: "1.4rem" }}>
          {alertMessage}
        </Alert>
      </Snackbar>
    </Box>
  );
};

const StyledTextField = styled(TextField)(
  ({ theme }) => `
  border-radious: ${theme.spacing(1)}
`
);

const StyledStack = styled(Stack)(
  ({ theme }) => `
  position: absolute;
  bottom: 25px;
  width: 91%;
  z-index: 1000;
  font-weight: normal;
  text-align: center;
  justify-content: center;
  color: ${theme.palette.common.white};
   & Link: {
    color: white;
   }
`
);

export default LogInForm;
