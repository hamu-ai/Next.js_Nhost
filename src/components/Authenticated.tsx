import { useAuthenticationStatus } from "@nhost/react";
import { useRouter } from "next/router";
import { FC, useEffect } from "react";

const Authenticated: FC = () => {
  const router = useRouter();
  const { isLoading, isAuthenticated } = useAuthenticationStatus();

  useEffect(() => {
    if (!isAuthenticated) {
      router.push("/SignIn");
    }
  }, [isAuthenticated, router]);

  return <div>{isLoading ? <p>Loading...</p> : null}</div>;
};

export default Authenticated;
