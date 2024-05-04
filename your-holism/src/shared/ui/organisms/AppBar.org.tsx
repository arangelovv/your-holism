import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import { AppBarOrganismConfig } from "../models/app-bar.config";

export default function AppBarOrganism({
  color,
  position,
  paddingLeft,
  paddingRight,
  title,
  titleColor,
  fontWeight,
}: AppBarOrganismConfig) {
  return (
    <AppBar
      position={(position = "static")}
      sx={{
        backgroundColor: `${color}`,
        paddingLeft: `${paddingLeft}`,
        paddingRight: `${paddingRight}`,
      }}
    >
      <Toolbar>
        {!!title ? (
          <Typography
            variant="h5"
            component="div"
            sx={{
              flexGrow: 1,
              color: `${titleColor}`,
              fontWeight: `${fontWeight}`,
            }}
          >
            {title}
          </Typography>
        ) : null}
      </Toolbar>
    </AppBar>
  );
}
