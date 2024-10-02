import { Box, Typography } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import YouTubeIcon from "@mui/icons-material/YouTube";
import React from "react";

const Footer = () => {
  return (
    <>
      <Box
        sx={{ textAlign: "center", bgcolor: "#1A1A19", color: "white", p: 1 }}
      >
        <Box
          sx={{
            my: 2,
            "& svg": { fontSize: "35px", cursor: "pointer", marginRight: 2 },
            "& svg:hover": { color: "goldenrod", transform: "translate(5px)",transition:"all 400ms" },
          }}
        >
          <InstagramIcon />
          <GitHubIcon />
          <YouTubeIcon />
          <WhatsAppIcon />
        </Box>
        <Typography
          variant="h5"
          sx={{ "@media(max-width:600px)": { fontSize: "1rem" } }}
        >
          All Rights Reserved &copy; &nbsp;&nbsp; FastFood Pvt.Ltd
        </Typography>
      </Box>
    </>
  );
};

export default Footer;
