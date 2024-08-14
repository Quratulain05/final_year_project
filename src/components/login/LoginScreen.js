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
  width: 500,
  height: 600,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

export const LoginScreen = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <div className="bgImg z-0 w-auto  ">
        <div className="h-1/2 pt-20 justify-center items-center">
          <Typography
            className="text-center text-white  "
            style={{
              fontSize: 50,
              fontWeight: "bolder",
              fontFamily: "Montserrat",
            }}
          >
            {" "}
            Welcome To PSL Translator
          </Typography>
        </div>
        <div className="flex justify-center items-center ">
          <Button
            className="button w-60"
            sx={{ background: "white" }}
            onClick={handleOpen}
          >
            <Typography
              className="text-black"
              style={{ fontWeight: "bolder", fontFamily: "Montserrat" }}
            >
              Lets Get Started
            </Typography>
          </Button>
          <Modal open={open} onClose={handleClose}>
            <Box sx={style} className="rounded-3xl">
              <div>
                <Typography
                  className=" text-center "
                  style={{
                    color: "#4D115C",
                    fontFamily: "Montserrat",
                    fontSize: 40,
                    fontWeight: "bolder",
                  }}
                >
                  Sign In
                </Typography>
                <div className=" mt-10 flex flex-col items-center">
                  <TextField
                    className=" mt-10 w-80 "
                    id="standard-basic"
                    placeholder="Enter Email"
                    variant="standard"
                  />

                  <TextField
                    className="  mt-20 w-80"
                    id="standard-basic"
                    placeholder="Enter Passward"
                    variant="standard"
                  />
                </div>
                <div className="flex flex-row mt-10 ">
                <Checkbox className="mt-3 ml-10" {...label} />
                  <Typography
                    className="mt-5 w-2/4 justify-start  "
                    style={{ color: "#4D115C" }}
                  >
                    Remember me
                  </Typography>
                  <Typography
                    className="mt-5  w-2/4 flex justify-end mr-10"
                    style={{ color: "#4D115C" }}
                  >
                    Forgot Password?
                  </Typography>
                </div>
                <div className="flex justify-center">
                  <Button
                    className=" w-80 text-white mt-20"
                    style={{ background: "#4D115C" }}
                  >
                    Sign In
                  </Button>
                </div>
              </div>
            </Box>
          </Modal>
        </div>
      </div>
    </div>
  );
};
