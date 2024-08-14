
import loginBg from "../../assets/images/loginBgI.jpg"
import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600,
  height:600,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export const LoginScreen
 = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  
  return (
  <div>
    <div className="bgImg z-0 w-auto  " >
    <div className="h-1/2 pt-20 justify-center items-center">
    <Typography className="text-center text-white  " style={{fontSize:50, fontWeight:"bolder", fontFamily:"Monserrat"}}> Welcome To PSL Translator</Typography>
    </div>
    <div className="flex justify-center items-center ">
      <Button className="button" sx={{background:"lightblue"}} onClick={handleOpen}>
        <Typography className="text-black" style={{ fontWeight:"bolder"}}>
          Lets Get Started
        </Typography>
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        
      >
        <Box sx={style}>
          <div>
            
          </div>
          
          
        </Box>
      </Modal>
    </div>

    </div>
  </div>
  )
}
