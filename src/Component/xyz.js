import React from 'react'

const xyz = () => {
  return (
    <div>
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
    </div>
  )
}

export default xyz

