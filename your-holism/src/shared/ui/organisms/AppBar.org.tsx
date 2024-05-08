import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import { AppBarOrganismConfig } from "../models/app-bar.config";
import TypographyAtom from "../atoms/TypographyAtom";
import { NoEncryptionTwoTone } from "@mui/icons-material";

export default function AppBarOrganism({
  color,
  position,
  paddingLeft,
  paddingRight,
  title,
  titleColor,
}: AppBarOrganismConfig) {
  return (
    <AppBar
      position={(position = "static")}
      sx={{
        backgroundColor: `${color}`,
        paddingLeft: `${paddingLeft}`,
        paddingRight: `${paddingRight}`,
        boxShadow: "none",
      }}
    >
      <Toolbar>
        {!!title ? (
          <TypographyAtom
            variant="h5"
            text={title}
            color={titleColor}
            fontWeight="500"
          />
        ) : null}
      </Toolbar>
    </AppBar>
  );
}
