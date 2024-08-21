import { createBrowserRouter } from "react-router-dom";
import { LoginPage } from "../pages/LoginPage";
import { SignUpPage } from "../pages/SignUpPage";
import { Main } from "../pages/Main";
const router = createBrowserRouter([
  {
    path: "/loginpage",
    element: <LoginPage />,
  },
  {
    path: "/signup",
    element: <SignUpPage />, 
  },
  {
    path: "/main",
    element: <Main />, 
  },
  
]);



export default router;
