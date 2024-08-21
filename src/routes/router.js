import { createBrowserRouter } from "react-router-dom";
import { LoginPage } from "../pages/LoginPage";
import { SignUpPage } from "../pages/SignUpPage";
const router = createBrowserRouter([
  {
    path: "/loginpage",
    element: <LoginPage />,
  },
  {
    path: "/signup",
    element: <SignUpPage />, 
  },
  
]);



export default router;
