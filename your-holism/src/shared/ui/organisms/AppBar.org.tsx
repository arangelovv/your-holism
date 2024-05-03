import { AppBar, Toolbar, Typography, Button } from "@mui/material";

export default function AppBarOrganism() {
  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: "#1EAC6A",
        paddingLeft: "30px",
        paddingRight: "20px",
      }}
    >
      <Toolbar sx={{ backgroundColor: "#1EAC6A", paddingLeft: "50px" }}>
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
  );
}
