import AppBarOrganism from "../../shared/ui/organisms/AppBar.org";
import TabsOrganism from "../../shared/ui/organisms/Tabs.org";
import { tabsConfig, appBarConfig } from "./core.config";
import { Box } from "@mui/material";

export default function AppCorePage() {
  return (
    <Box sx={{ padding: "5px" }}>
      <AppBarOrganism {...appBarConfig} />
      <TabsOrganism tabs={tabsConfig} />
    </Box>
  );
}
