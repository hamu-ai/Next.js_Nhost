import { ReactElement } from "react";
import SignIn from "src/components/SignIn";

import { NextPageWithLayout } from "./_app";

const SignInPage: NextPageWithLayout = () => {
  return (
    <div>
      <SignIn />
    </div>
  );
};

SignInPage.getLayout = function getLayout(page: ReactElement) {
  return <>{page}</>;
};

export default SignInPage;
