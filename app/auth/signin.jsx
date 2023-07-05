import { useSession } from "next-auth/react";
import { signIn } from "next-auth/react";
import { useState } from "react";

const SignIn = (props) => {
  const [userInfo, setUserInfo] = useState({ email: "", password: "" });
  const { data: session, status } = useSession()
  if (status === "authenticated") {
    return <p>Signed in as {session.user.email}</p>
  }
  const handleSubmit = async (e) => {
    // validate your userinfo
    e.preventDefault();

    const res = await signIn("credentials", {
      email: userInfo.email,
      password: userInfo.password, consolelog(session,status);
      redirect: false,
    });
    console.log(session,status);
    console.log(res);
  };
  return (
    <div className="sign-in-form">
      <form onSubmit={handleSubmit}>
        <h1>Login</h1>
        <input
          value={userInfo.email}
          onChange={({ target }) =>
            setUserInfo({ ...userInfo, email: target.value })
          }
          type="email"
          placeholder="john@email.com"
        />
        <input
          value={userInfo.password}
          onChange={({ target }) =>
            setUserInfo({ ...userInfo, password: target.value })
          }
          type="password"
          placeholder="********"
        />
        <input type="submit" value="Login" />
      </form>
    </div>
  );
};

export default SignIn;