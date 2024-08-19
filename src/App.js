import { ThemeProvider, createTheme } from "@mui/material";
import { Route, Router, RouterProvider, Routes } from "react-router-dom";
import router from "./routes/router";
import '../src/assets/css/style.css';
const theme = createTheme({
  palette: {
    orange: {
      main: "#F3A366",
    },
    blue: {
      main: "#171C36",
    },
    white: {
      main: "#FFFFFF",
    },
    text: {
      darkBlue: "#171C36",
      white: "#FFFFFF",
      placeholder: "#9FA3AF",
    },
  },
  typography: {
    fontFamily: "Inter, sans-serif",
    fontSize: 16,
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1281,
      xlg: 1950,
      xxl: 2560,
    },
  },
});
function App() {
  return (<>
    <ThemeProvider theme={theme}>
    <RouterProvider router={router} />
  </ThemeProvider>
  <Router>
      <Routes>
        <Route path="/" element={<LoginScreen />} />
        <Route path="/signup" element={<SignUpPage />} />
      </Routes>
    </Router>
  </>
  );
}

export default App;
