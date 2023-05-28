import React, { useState } from "react";
import NewspaperIcon from "@mui/icons-material/Newspaper";
import MenuIcon from '@mui/icons-material/Menu';
import LoginIcon from '@mui/icons-material/Login';
import { AppBar, Box,Button, Divider, Drawer, IconButton,Toolbar, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";
import "./Nav.css"
const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  //Handel menu click
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  //Menu Drawer
  const drawer=(
    <Box onClick={handleDrawerToggle}>
      <Typography color={"goldenrod"} varient="h3" component="div" >
          <NewspaperIcon sx={{ margin: "auto" }} />
            NewsBasket
          </Typography>
          <Divider/>
            <ul class="navigation-mobile">
              <li>
              <NavLink to={"/"}>NewsBasket</NavLink>
              </li>
              <li>
              <NavLink to={"/general"}> General</NavLink>
              </li>
              <li>
              <NavLink to={"/health"}>Health</NavLink>
              </li>
              <li>
              <NavLink to={"/sports"}>Sports</NavLink>
              </li>
              <li>
              <NavLink to={"/business"}>Business</NavLink>
              </li>
              <li>
              <NavLink to={"/technology"}>Technology</NavLink>
              </li>
              <li>
              <NavLink to={"/entertainment"}>Entertainment</NavLink>
              </li>
            </ul> 
            <Box class="navigation-mobile-button">
            <Button color="primary" variant="contained" endIcon={<LoginIcon/>}>Login</Button>
            </Box>
    </Box>
  )
  return (
    <>
    <Box class="nav">
      <AppBar  component={'nav'} sx={{ background: "black" }}>
        <Toolbar>
          <IconButton  color="inherit" aria-label="open drawer" edge="start"
             sx={{mr:2,display:{sm:"none"}}}
             onClick={handleDrawerToggle}>
            <MenuIcon/>
          </IconButton>
          <Typography color={"goldenrod"} varient="h3" component="div" >
          <NewspaperIcon sx={{ margin: "auto" }} />
            NewsBasket
          </Typography>
          <Box sx={{display:{xs:"none",sm:"block"}}}>
            <ul class="navigation-menu">
              <li>
              <NavLink to={"/"}>Headlines</NavLink>
              </li>
              <li>
              <NavLink to={"/general"}> General</NavLink>
              </li>
              <li>
              <NavLink to={"/health"}>Health</NavLink>
              </li>
              <li>
              <NavLink to={"/sports"}>Sports</NavLink>
              </li>
              <li>
              <NavLink to={"/business"}>Business</NavLink>
              </li>
              <li>
              <NavLink to={"/technology"}>Technology</NavLink>
              </li>
              <li>
              <NavLink to={"/entertainment"}>Entertainment</NavLink>
              </li>
            </ul>
            </Box>
            <Box class="button"
            sx={{display:{xs:"none",sm:"block"}}}>
            <Button color="primary" variant="contained" endIcon={<LoginIcon/>}>Login</Button>
            </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
          <Drawer
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            sx={{
              display: { xs: "block", sm: "none" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: "240px",
              },
            }}
          >
            {drawer}
          </Drawer>
        </Box>
      <Toolbar />
      </Box>
    </>
  );
};

export default Navbar;
