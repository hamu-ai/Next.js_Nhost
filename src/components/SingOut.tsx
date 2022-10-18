import { useSignOut } from "@nhost/react";
import { FC } from "react";

const SingOut: FC = () => {
  const { signOut } = useSignOut();

  const handleClick = () => {
    signOut();
  };
  return (
    <div>
      <button onClick={handleClick}>ログアウト</button>
    </div>
  );
};

export default SingOut;
