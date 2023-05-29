import React from "react";
import { Grid, Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import PrimaryButton from "../components/inputs/PrimaryButton";
import logo from "../images/ePatientCare.png";

const IndexPage = () => {
  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
      sx={{ minHeight: "100vh" }}
    >
      <Box>
        <img src={logo} alt="ePatientCare logo" width={170} />
        <Box pt={5} mt={5} display="flex" justifyContent="center">
          <PrimaryButton buttonTxt="Get Started" to="/onboarding" sx={{fontSize:"1.2rem"}}/>
        </Box>

      </Box>
    </Grid>
  );
};

export default IndexPage;
