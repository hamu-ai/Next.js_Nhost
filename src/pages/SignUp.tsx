import { ReactElement } from "react";
import SignUp from "src/components/SignUp";

import { NextPageWithLayout } from "./_app";

const SignUpPage: NextPageWithLayout = () => {
  return (
    <div>
      <SignUp />
    </div>
  );
};

SignUpPage.getLayout = function getLayout(page: ReactElement) {
  return <>{page}</>;
};
export default SignUpPage;
