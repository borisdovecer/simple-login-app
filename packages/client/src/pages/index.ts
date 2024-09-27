import Home from "./Home.tsx";
import Login from "./Login.tsx";
import Register from "./Register.tsx";
import { IPage } from "./page.types.ts";

const pages: IPage[] = [
  { name: "Home", path: "/", element: Home },
  { name: "Login", path: "/login", element: Login },
  { name: "Signup", path: "/signup", element: Register },
]

export default pages;