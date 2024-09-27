import { useEffect } from "react";
import { Link } from "react-router-dom";
import { AppDispatch, RootState } from "../store";
import { IUserState } from "../store/store.types.ts";
import { logout, setUser } from "../store/userSlice.ts";
import { useAppDispatch, useAppSelector } from "../store/hooks.ts";

const Home = () => {
  const dispatch: AppDispatch = useAppDispatch();
  const user: IUserState = useAppSelector((state: RootState) => state.user);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    dispatch(logout());
  }

  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    if (storedToken) {
      const storedUserData = JSON.parse(localStorage.getItem("user") || "{}");

      if (storedUserData?.firstname && storedUserData?.lastname) {
        dispatch(setUser({ ...storedUserData, token: storedToken }));
      }
    }
  }, [dispatch, user.token]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900 text-white">
      {user.token ? (
        <div className="text-center">
          <p className="text-2xl font-semibold">Welcome, {user.firstname} {user.lastname}!</p>
          <button
            onClick={handleLogout}
            className="mt-4 px-6 py-2 bg-red-600 text-white rounded-lg hover:bg-red-500 transition duration-300"
          >
            Logout
          </button>
        </div>
      ) : (
        <div className="text-center">
          <p className="text-xl font-medium">You need to login or signup</p>
          <div className="mt-6 space-y-4">
            <Link
              to="/login"
              className="block px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-500 transition duration-300"
            >
              Login
            </Link>
            <Link
              to="/signup"
              className="block px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-500 transition duration-300"
            >
              Signup
            </Link>
          </div>
        </div>
      )}
    </div>
  )
}

export default Home;