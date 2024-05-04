import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import { AppBarOrganismConfig } from "../models/app-bar.config";
import TypographyAtom from "../atoms/TypographyAtom";

export default function AppBarOrganism({
  color,
  position,
  paddingLeft,
  paddingRight,
  title,
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
          <TypographyAtom
            variant="h5"
            text={title}
            color="black"
            fontWeight="500"
          />
        ) : null}
      </Toolbar>
    </AppBar>
  );
}
