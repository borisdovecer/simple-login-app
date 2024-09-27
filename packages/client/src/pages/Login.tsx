import { AppDispatch } from "../store";
import { loginUser } from "../api/api.ts";
import { setUser } from "../store/userSlice.ts";
import { useAppDispatch } from "../store/hooks.ts";
import { ChangeEvent, FormEvent, useState } from "react";
import { NavigateFunction, useNavigate } from "react-router-dom";

const Login = () => {
  const [mail, setMail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string>("");
  const history: NavigateFunction = useNavigate();
  const dispatch: AppDispatch = useAppDispatch();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    try {
      const { email, token, lastname, firstname } = await loginUser(mail, password);
      dispatch(setUser({ firstname, lastname, email, token }));
      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify({ firstname, lastname, email }));
      history("/");
    } catch (err: any) {
      setError(err.response.data || "Invalid username or password");
    }
  };

  return (
    <div className="flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-200">
            Sign in to your account
          </h2>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="email-address" className="sr-only">email</label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="email"
                value={mail}
                onChange={(e: ChangeEvent<HTMLInputElement>) => setMail(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">Password</label>
              <input
                id="password"
                name="password"
                type="password"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Password"
                value={password}
                onChange={(e: ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
              />
            </div>
          </div>
          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 text-sm rounded-md text-white bg-lime-600 hover:bg-lime-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-lime-500">
              Sign in
            </button>
          </div>
        </form>
        {error && <p className="text-red-500 text-center">{error}</p>}
      </div>
    </div>
  );
};

export default Login;