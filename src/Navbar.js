import React, { useState } from "react";
import NewspaperIcon from '@mui/icons-material/Newspaper';
import {
  AppBar,
  Button,
  Tab,
  Tabs,
  Toolbar,
} from "@mui/material";
import {Link} from "@mui/material";
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
              <NewspaperIcon sx={{margin:"auto"}}/>
              <Tab label="NewsBasket" value="/" to="./Component/NewsBasket" component={Link} />
              <Tab label="About Us" value="/aboutus" to="./Component/aboutus" component={Link} />
              <Tab label="Contact" value="/contact" to="./Component/contact" component={Link} />
              
            </Tabs>
            <Button sx={{ marginLeft: "auto" }} variant="contained">
              Login
            </Button>
          </>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
};

export default Navbar;