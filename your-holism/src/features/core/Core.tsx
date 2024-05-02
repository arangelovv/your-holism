import { Outlet } from "react-router-dom";
import { AppBar, Button, IconButton, Toolbar, Typography } from "@mui/material";

function AppCore() {
  return (
    <div className="core-container">
      <AppBar
        position="static"
        sx={{
          backgroundColor: "#2DC27D",
          paddingLeft: "30px",
          paddingRight: "20px",
        }}
      >
        <Toolbar sx={{ backgroundColor: "#2DC27D", paddingLeft: "50px" }}>
          <Typography
            variant="h5"
            component="div"
            sx={{
              flexGrow: 1,
              color: "#263238",
              fontWeight: "500",
            }}
          >
            Your Holism
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
      <Outlet />
    </div>
  );
}

export default AppCore;
