import React from "react";
import Nav from "../landing-page/Nav";
import { Typography, Box, Toolbar } from "@mui/material";

const Main = ({heading,subheading}) => {
  return (
    <div>
      <Nav />
      <Box
        marginTop={14}
        sx={
          {
            // backgroundColor:"Highlight",
            // backgroundImage:"url(/imgs/background.jpg)",
            // minHeight:"100vh",
            // backgroundSize:"100% 100%",
            // backgroundRepeat:"no-repeat"
          }
        }
      >
        <Typography variant="h2" component="h1" align="center">
          {heading}
        </Typography>
        <Typography variant="body1" align="center">
          {subheading}
        </Typography>
        <Typography variant="body2" align="center" m={5}>
          <Toolbar />
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in
          hendrerit ipsum. Sed et ex ligula. Sed eget justo non metus aliquet
          lacinia. Pellentesque vitae aliquam dui, et sagittis arcu. Lorem ipsum
          dolor sit amet, consectetur adipiscing elit. Nullam in hendrerit
          ipsum. Sed et ex ligula. Sed eget justo non metus aliquet lacinia.
          Pellentesque vitae aliquam dui, et sagittis arcu. Lorem ipsum dolor
          sit amet, consectetur adipiscing elit. Nullam in hendrerit ipsum. Sed
          et ex ligula. Sed eget justo non metus aliquet lacinia. Pellentesque
          vitae aliquam dui, et sagittis arcu. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit. Nullam in hendrerit ipsum. Sed et ex
          ligula. Sed eget justo non metus aliquet lacinia. Pellentesque vitae
          aliquam dui, et sagittis arcu. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Nullam in hendrerit ipsum. Sed et ex ligula. Sed eget
          justo non metus aliquet lacinia. Pellentesque vitae aliquam dui, et
          sagittis arcu. Lorem ipsum dolor sit amet, consectetur adipiscing
          elit. Nullam in hendrerit ipsum. Sed et ex ligula. Sed eget justo non
          metus aliquet lacinia. Pellentesque vitae aliquam dui, et sagittis
          arcu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
          in hendrerit ipsum. Sed et ex ligula. Sed eget justo non metus aliquet
          lacinia. Pellentesque vitae aliquam dui, et sagittis arcu. Lorem ipsum
          dolor sit amet, consectetur adipiscing elit. Nullam in hendrerit
          ipsum. Sed et ex ligula. Sed eget justo non metus aliquet lacinia.
          Pellentesque vitae aliquam dui, et sagittis arcu. Lorem ipsum dolor
          sit amet, consectetur adipiscing elit. Nullam in hendrerit ipsum. Sed
          et ex ligula. Sed eget justo non metus aliquet lacinia. Pellentesque
          vitae aliquam dui, et sagittis arcu. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit. Nullam in hendrerit ipsum. Sed et ex
          ligula. Sed eget justo non metus aliquet lacinia. Pellentesque vitae
          aliquam dui, et sagittis arcu. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Nullam in hendrerit ipsum. Sed et ex ligula. Sed eget
          justo non metus aliquet lacinia. Pellentesque vitae aliquam dui, et
          sagittis arcu. Lorem ipsum dolor sit amet, consectetur adipiscing
          elit. Nullam in hendrerit ipsum. Sed et ex ligula. Sed eget justo non
          metus aliquet lacinia. Pellentesque vitae aliquam dui, et sagittis
          arcu.
        </Typography>
      </Box>
    </div>
  );
};
export default Main;
