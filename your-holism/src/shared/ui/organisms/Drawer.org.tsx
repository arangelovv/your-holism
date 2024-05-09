import { Drawer } from "@mui/material";
import { DrawerOrganismConfig } from "../models/drawer.config";
import TypographyAtom from "../atoms/TypographyAtom";

export default function DrawerOrganism({
  position,
  width,
  color,
}: DrawerOrganismConfig) {
  return (
    <Drawer
      variant="permanent"
      anchor={position}
      sx={{
        width: { width },
        overflow: "auto",
        boxSizing: "border-box",
        "& .MuiDrawer-paper": {
          width: width,
          boxSizing: "border-box",
          backgroundColor: color,
        },
      }}
    >
      <TypographyAtom variant="h5" text="Example Content" fontWeight="500" />
    </Drawer>
  );
}
