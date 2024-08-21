import loginBg from "../../assets/images/loginBgI.jpg";
import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import Checkbox from '@mui/material/Checkbox';
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 550,
  height: 600,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

export const SignupScreen = () => {
  const [open, setOpen] = React.useState(true); // Modal should open by default

  const handleClose = () => setOpen(false);

  React.useEffect(() => {
    setOpen(true); // Open modal when component mounts
  }, []);

  return (
    <div className="bgImg z-0 w-auto  ">
    <Modal open={open} onClose={handleClose}>
      <Box sx={style} className="rounded-3xl">
        <div>
          <Typography
            className="text-center"
            style={{
              color: "#4D115C",
              fontFamily: "Montserrat",
              fontSize: 40,
              fontWeight: "bolder",
            }}
          >
            Sign Up
          </Typography>
          <div className="flex flex-col items-center">
            <TextField
              className="mt-16 w-80"
              id="standard-basic"
              placeholder="Enter Name"
              variant="standard"
            />
            <TextField
              className="mt-8 w-80"
              id="standard-basic"
              placeholder="Enter Email"
              variant="standard"
            />
            <TextField
              className="mt-8 w-80"
              id="standard-basic"
              placeholder="Enter Password"
              variant="standard"
            />
            <TextField
              className="mt-8 w-80"
              id="standard-basic"
              placeholder="Confirm Password"
              variant="standard"
            />
          </div>
          <div className="flex justify-center">
            <Button
              className="w-80 text-white mt-20"
              style={{ background: "#4D115C" }}
            >
              Create Account
            </Button>
          </div>
        </div>
      </Box>
    </Modal>
    </div>
  );
};
