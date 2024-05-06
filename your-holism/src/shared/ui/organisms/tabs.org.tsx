import { useState, SyntheticEvent } from "react";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import { Box, Tab } from "@mui/material";
import { TabsOrganismConfig } from "../models/tabs.config";
import { Link, Outlet } from "react-router-dom";
import PhoneMissedIcon from "@mui/icons-material/PhoneMissed";

/**
 * TabsComponent encompasses the MUI's TabList  and react-router for easier setup of navigation through tabs
 * It requiers an array of objects with the type TabsConfig
 * @param {object} props - The parameter props represents the props object passed to the TabsComponent function. It contains configuration data necessary for rendering the tabs.
 * Each object should conform to the TabsConfig interface.
 */
export default function TabsOrganism({ tabs }: any) {
  const [value, setValue] = useState("1");
  const tabsItems: TabsOrganismConfig[] = tabs;

  const handleChange = (event: SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{
        width: "100%",
        typography: "body1",
        paddingLeft: "10px",
        paddingRight: "10px",
        backgroundColor: "#fafafa",
        height: "100vh",
      }}
    >
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <TabList onChange={handleChange} variant="fullWidth">
            {tabsItems?.map((tab) => (
              <Tab
                label={tab.label}
                value={tab.index}
                component={Link}
                to={tab.herf}
                icon={tab.icon}
                iconPosition={tab.iconPosition}
                sx={{ textTransform: "none" }}
              />
            ))}
          </TabList>
        </Box>

        {tabsItems?.map((tab) => (
          <TabPanel value={tab.index}>
            <Outlet />,
          </TabPanel>
        ))}
      </TabContext>
    </Box>
  );
}
