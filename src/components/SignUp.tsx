import { useSignUpEmailPassword } from "@nhost/react";
import Link from "next/link";
import { useRouter } from "next/router";
import { FC, FormEventHandler, useState } from "react";

const SignUp: FC = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const {
    signUpEmailPassword,
    isLoading,
    isSuccess,
    needsEmailVerification,
    isError,
  } = useSignUpEmailPassword();

  const handleOnSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();

    await signUpEmailPassword(email, password, {
      displayName: `${firstName} ${lastName}`.trim(),
      metadata: {
        firstName,
        lastName,
      },
    });
  };
  if (isSuccess) {
    router.push("/");
    return null;
  }

  const disableForm = isLoading || needsEmailVerification;
  return (
    <div className=" flex flex-col justify-center  h-screen gap-y-4">
      {isError ? (
        <p className="text-center mb-6">パスワードを８桁以上入力してください</p>
      ) : null}
      <div>
        {needsEmailVerification ? (
          <p className="text-center">
            メールボックスを確認し、確認リンクに従って確認してください
            あなたの電子メール。
          </p>
        ) : (
          <form
            onSubmit={handleOnSubmit}
            className="flex flex-col max-w-sm mx-auto space-y-5 "
          >
            <div className="flex justify-between ">
              <div className="flex flex-col">
                <label>First Name</label>
                <input
                  type="text"
                  placeholder="First Name"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  required
                  className="border border-black"
                  disabled={disableForm}
                />
              </div>

              <div className="flex flex-col">
                <label>Last Name</label>
                <input
                  type="text"
                  placeholder="Last  Name"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  required
                  className="border border-black"
                  disabled={disableForm}
                />
              </div>
            </div>

            <div className="flex flex-col">
              <label>メールアドレス</label>
              <input
                type="email"
                placeholder="メールアドレス"
                className="border border-black"
                disabled={disableForm}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="flex flex-col">
              <label>8桁以上のパスワード</label>
              <input
                type="password"
                placeholder="パスワード"
                className="border border-black"
                disabled={disableForm}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <button type="submit" disabled={disableForm}>
              {isLoading ? <p>loading...</p> : <p>Create account</p>}
            </button>
          </form>
        )}
      </div>
      <p className="text-center">
        Already hava an account?{""}
        <Link href="/SignIn">
          <a className="text-red-600 hover:text-red-300">Sign in</a>
        </Link>
      </p>
    </div>
  );
};

export default SignUp;
