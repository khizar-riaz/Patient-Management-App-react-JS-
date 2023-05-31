import React, { useState } from "react";
import {
  styled,
  Box,
  Typography,
  TextField,
  Grid,
  Stack,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Snackbar,
  Alert
} from "@mui/material";
import { useNavigate } from 'react-router-dom';
import validator from 'validator';
import { Link } from "react-router-dom";
import PrimaryButton from "../../components/inputs/PrimaryButton";
import axios from "axios";

const LogInForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [DOB, setDOB] = useState("");
  const [gender, setGender] = useState("");
  const [city, setCity] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [open, setOpen] = useState(false);
  const [isEmailWrong, setIsEmailWrong] = useState(false);
  const [emailHelperText, setEmailHelperText] = useState();
  const [isPasswordWrong, setIsPasswordWrong] = useState(false);
  const [passwordHelperText, setPasswordHelperText] = useState();
  const [isFirstNameWrong, setIsFirstNameWrong] = useState(false);
  const [isLastNameWrong, setIsLastNameWrong] = useState(false);
  const [isDOBWrong, setIsDOBWrong] = useState(false);
  const [isGenderWrong, setIsGenderWrong] = useState(false);
  const [isCityWrong, setIsCityWrong] = useState(false);
  const [openAlert, setOpenAlert] = useState(false);
  const navigate = useNavigate();
  
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const isFormValid = validateInputControls()
      if (isFormValid){
      const rawResponse = await axios.post(process.env.REACT_APP_URL + '/api/v1/patients', { firstName: firstName, lastName: lastName, password: password, dateOfBirth: DOB, city: city, gender: gender, email: email, password: password }
      );
      const content = await rawResponse.data;
      if (content.firstName) {
        navigate('/login', {state: {
          register: true,
        }});
      }} 
    } catch (error) {
      console.log(error.response.data.message);
      setOpenAlert(true)
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

    if (!validator.isLength(firstName, { min: 1 })) {
      setIsFirstNameWrong(true)
      isValid = false
    } else {
      setIsFirstNameWrong(false)
    }

    if (!validator.isLength(lastName, { min: 1 })) {
      setIsLastNameWrong(true)
      isValid = false
    } else {
      setIsLastNameWrong(false)
    }

    if (!validator.isLength(city, { min: 4 })) {
      setIsCityWrong(true)
      isValid = false
    } else {
      setIsCityWrong(false)
    }

    if (!validator.isLength(DOB, { min: 1 })) {
      setIsDOBWrong(true)
      isValid = false
    } else {
      setIsDOBWrong(false)
    }

    if (!validator.isLength(gender, { min: 1 })) {
      setIsGenderWrong(true)
      isValid = false
    } else {
      setIsGenderWrong(false)
    }

    return isValid;
  }

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleChange = (event) => {
    setGender(event.target.value);
  };

  const handleCloseAlert = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpenAlert(false);
  };
  return (
    <Box>
      <Box textAlign="center" mb={1}>
        <Typography sx={{ fontWeight: "bold" }} variant="h4">Sign up to continue</Typography>
      </Box>
      <Grid container justifyContent="center" alignItems="center">
        <Grid item lg={6} md={12}>
          <form >
            <Stack direction="row" spacing={1} mt={2}>
              <StyledTextField
                label="First Name"
                type="text"
                value={firstName}
                onChange={(event) => setFirstName(event.target.value)}
                error={isFirstNameWrong}
                fullWidth
                InputLabelProps={{
                  shrink: true,
                }}
              />
              <StyledTextField
                label="Last Name"
                type="text"
                value={lastName}
                onChange={(event) => setLastName(event.target.value)}
                error={isLastNameWrong}
                fullWidth
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </Stack>
            <Stack direction="row" spacing={1} mt={2}>
              <StyledTextField
                label="Date of Birth"
                type="date"
                value={DOB}
                onChange={(event) => setDOB(event.target.value)}
                error={isDOBWrong}
                fullWidth
                InputLabelProps={{
                  shrink: true,
                }}
              />
              <FormControl sx={{ m: 1, minWidth: 120 }}>
                <InputLabel id="demo-controlled-open-select-label">
                  Gender
                </InputLabel>
                <Select
                  labelId="demo-controlled-open-select-label"
                  id="demo-controlled-open-select"
                  open={open}
                  onClose={handleClose}
                  onOpen={handleOpen}
                  error={isGenderWrong}
                  value={gender}
                  label="Gender"
                  onChange={handleChange}
                  autoWidth={true}
                >
                  <MenuItem value="none">None</MenuItem>
                  <MenuItem value="male">Male</MenuItem>
                  <MenuItem value="female">Female</MenuItem>
                </Select>
              </FormControl>
            </Stack>
            <Box mt={2}>
              <StyledTextField
                label="City"
                type="text"
                value={city}
                onChange={(event) => setCity(event.target.value)}
                error={isCityWrong}
                fullWidth
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </Box>
            <Box mt={2}>
              <StyledTextField
                label="Email"
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                error={isEmailWrong}
                helperText={emailHelperText}
                fullWidth
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </Box>
            <Stack direction="row" spacing={1} mt={2}>
              <StyledTextField
                label="Password"
                type="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                error={isPasswordWrong}
                helperText={passwordHelperText}
                fullWidth
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </Stack>
            <Box mt={2}>
              <PrimaryButton
                buttonTxt="Sign Up"
                onPress={handleSubmit}
                sx={{ width: "100%", py: 1.5, fontSize:"1.1rem" }}
              />
            </Box>
          </form>
        </Grid>
      </Grid>
      <StyledStack>
        <Typography variant="h5"> Do you have an account?{" "}
        <Link to="/login" style={{ color: "white" }}>
          Sign In
        </Link>
        </Typography>
      </StyledStack>
      <Snackbar open={openAlert} autoHideDuration={3000} onClose={handleCloseAlert} anchorOrigin={{ vertical: 'top', horizontal: 'center' }}>
        <Alert onClose={handleCloseAlert} severity={"error"} sx={{ width: '100%', fontSize: "1.4rem" }}>
          {"Email already registered."}
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
