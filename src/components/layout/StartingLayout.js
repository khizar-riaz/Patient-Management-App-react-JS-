import React from "react";
import { styled, Box, Typography, Container } from "@mui/material";

const Layout = ({ children, title }) => {
  return (
    <Box>
      <PageTitle>
        <Typography
          variant="h4"
          pt={4}
          sx={{ color: "white", letterSpacing: "2px" }}
        >
          {title}
        </Typography>
      </PageTitle>
      <Container sx={{ mt: 5 }}>{children}</Container>
      <PageFooter />
    </Box>
  );
};

const PageTitle = styled(Box)(
  ({ theme }) => `
  background-color: ${theme.palette.primary.main};
  height: 75px;
  width: 100%;
  text-align: center;
`
);

const PageFooter = styled(Box)(
  ({ theme }) => `
  background-color: ${theme.palette.primary.main};
  height: 75px;
  width: 100%;
  text-align: center;
  position: absolute;
  bottom: 0;
  right: 0;
  left: 0;
`
);

export default Layout;
