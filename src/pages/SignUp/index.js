import React from "react";
import StartingLayout from "../../components/layout/StartingLayout";
import SignUpForm from "../../components/forms/SignUpForm";

const IndexPage = () => {
  return (
    <StartingLayout title="Sign Up">
      <SignUpForm />
    </StartingLayout>
  );
};

export default IndexPage;
