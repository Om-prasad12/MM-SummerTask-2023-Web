import React, { useState } from "react";
import NewspaperIcon from "@mui/icons-material/Newspaper";
import { AppBar, Button, Tab, Tabs, Toolbar } from "@mui/material";
import { Link } from "@mui/material";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [value, setValue] = useState(1);
  return (
    <React.Fragment>
      <AppBar sx={{ background: "#063970" }}>
        <Toolbar>
          <>
            <Tabs
              indicatorColor="secondary"
              textColor="inherit"
              value={value}
              onChange={(e, value) => setValue(value)}
            >
              <NewspaperIcon sx={{ margin: "auto" }} />
              <NavLink to={"/"}>NewsBasket</NavLink>
              <NavLink to={"/technology"}>Technology</NavLink>
              <NavLink to={"/business"}>Business</NavLink>
              <NavLink to={"/entertainment"}>Entertainment</NavLink>
              <NavLink to={"/health"}>Health</NavLink>
              <NavLink to={"/general"}> General</NavLink>
              <NavLink to={"/sports"}>Sports</NavLink>
            </Tabs>
            <Button sx={{ marginLeft: "auto" }} variant="contained">
              Login
            </Button>
          </>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </React.Fragment>
  );
};

export default Navbar;
