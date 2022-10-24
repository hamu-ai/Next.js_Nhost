import { useSignOut } from "@nhost/react";
import { useRouter } from "next/router";
import { FC } from "react";

const SingOut: FC = () => {
  const { signOut } = useSignOut();
  const router = useRouter();

  const handleClick = () => {
    signOut();
    router.push("/SignIn");
  };
  return (
    <div>
      <button onClick={handleClick}>ログアウト</button>
    </div>
  );
};

export default SingOut;
