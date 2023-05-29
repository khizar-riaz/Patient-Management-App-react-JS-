import React from "react";
import { Grid, Box, Typography } from "@mui/material";
import PrimaryButton from "../components/inputs/PrimaryButton";
import DoctorImg from "../images/doctor_standing.png";

const OnboardingPage = () => {
  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
      textAlign="center"
      sx={{ minHeight: "100vh" }}
    >
      <Box>
        <img src={DoctorImg} alt="ePatientCare logo" />
        <Typography variant="h3" mt={3}>
          Find Doctors!
        </Typography>
        <Typography p={3} variant="h5"  sx={{fontWeight:"normal"}}>
          Arrange appointments, access your prescriptions and lab results and receive support through our live chat.
        </Typography>
        <Box mt={5} display="flex" justifyContent="center">
          <PrimaryButton buttonTxt="Next" to="/login" sx={{ paddingX: 8 , fontSize:"1.2rem"}}  />
        </Box>
      </Box>
    </Grid>
  );
};

export default OnboardingPage;
