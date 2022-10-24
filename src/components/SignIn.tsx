import { useSignInEmailPassword } from "@nhost/react";
import Link from "next/link";
import { useRouter } from "next/router";
import { FC, FormEventHandler, useState } from "react";

const SignIn: FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const router = useRouter();

  const {
    signInEmailPassword,
    isLoading,
    isSuccess,
    needsEmailVerification,

    isError,
  } = useSignInEmailPassword();

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    await signInEmailPassword(email, password);
  };

  if (isSuccess) {
    router.push("/");
  }

  const disableForm = isLoading || needsEmailVerification;
  return (
    <div>
      {isError ? (
        <p className="text-center relative top-14 text-red-800">
          アカウントがありません
        </p>
      ) : null}
      <div className=" flex flex-col justify-center  h-screen ">
        <div className="space-y-9">
          <form
            className="flex flex-col max-w-md mx-auto space-y-9"
            onSubmit={handleSubmit}
            method="post"
          >
            <div className="flex flex-col">
              <label>メールアドレス</label>
              <input
                type="email"
                placeholder="メールアドレス"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={disableForm}
                className="border border-black"
                required
              />
            </div>

            <div className="flex flex-col">
              <label>パスワード</label>
              <input
                type="password"
                placeholder="パスワード"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                disabled={disableForm}
                className="border border-black"
                required
              />
            </div>
            <button type="submit" disabled={disableForm}>
              {isLoading ? <p>Loading...</p> : <p>Sign in</p>}
            </button>
          </form>

          <p className="text-center">
            No account yet?
            <Link href="/SignUp">
              <a className="text-red-700 hover:text-red-400">Sign Up</a>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
