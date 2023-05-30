import React from "react";
import StartingLayout from "../../components/layout/StartingLayout";
import LogInForm from "../../components/forms/LogInForm";

const IndexPage = () => {
  return (
    <StartingLayout title="Sign In">
      <LogInForm />
    </StartingLayout>
  );
};

export default IndexPage;
