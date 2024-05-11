import { AppBar, Toolbar } from "@mui/material";
import { AppBarOrganismConfig } from "../models/app-bar.config";
import TypographyAtom from "../atoms/TypographyAtom";

export default function AppBarOrganism({
  color,
  position,
  paddingLeft,
  paddingRight,
  title,
  titleColor,
  borderRadius,
  children,
}: AppBarOrganismConfig & { children?: React.ReactNode }) {
  return (
    <AppBar
      position={(position = "static")}
      sx={{
        backgroundColor: `${color}`,
        paddingLeft: `${paddingLeft}`,
        paddingRight: `${paddingRight}`,
        boxShadow: "none",
        borderRadius: `${borderRadius}`,
      }}
    >
      <Toolbar>
        {!!title ? (
          <TypographyAtom
            variant="h5"
            text={title}
            color={titleColor}
            fontWeight="500"
            flexGrow="1"
          />
        ) : null}
        {children}
      </Toolbar>
    </AppBar>
  );
}
