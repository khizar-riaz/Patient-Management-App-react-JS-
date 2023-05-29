import React from "react";
import { styled, Button } from "@mui/material";
import { Link } from "react-router-dom";

//state={{doctor:doctor,appointmentToModify:appointmentToModify,isPrecheck,isPrecheck}}
const PrimaryButton = ({ buttonTxt, to, size,appointmentToModify,isPrecheck,doctor,onPress, ...props }) => {
  return (
    <StyledButton {...props} onClick={onPress} variant="contained" size={size}>
      {to?<StyledLink to={to}>{buttonTxt}</StyledLink>:buttonTxt}
    </StyledButton>
  );
};

const StyledButton = styled(Button)(
  ({ theme }) => `
    background-color: ${theme.palette.primary.main} !important;
    color: ${theme.palette.common.white};
    border-radius: ${theme.spacing(1)}; 
`
);

const StyledLink = styled(Link)(
  ({ theme }) => `
  color: ${theme.palette.common.white};
  text-decoration: none;
`
);

export default PrimaryButton;
