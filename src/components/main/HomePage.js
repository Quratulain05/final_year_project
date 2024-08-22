import { Button, Typography } from "@mui/material";
import React from "react";

export const HomePage = () => {
  return (
    <div className="flex flex-row px-20 items-center mainbgImg min-h-full">
      <div className="bg-white h-1/2  " style={{ flex: 6 }}></div>
      <div className=" flex justify-center" style={{ flex: 4 }}>
        <Button className="button w-60 flex justify-center" sx={{ background: "white" }}>
          <Typography
            className="text-black"
            style={{ fontWeight: "bolder", fontFamily: "Montserrat" }}
          > Translate </Typography>
        </Button>
      </div>
      <textarea className="bg-white h-1/2  " style={{ flex: 4 }}></textarea>
    </div>
  );
};
