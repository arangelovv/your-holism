import { Outlet } from "react-router-dom";
import { TabsOrganismConfig } from "../../shared/ui/models/tabs.config";

const months: string[] = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const currentDate: Date = new Date();
const currentMonth: string = months[currentDate.getMonth()];

export const tabsConfig: TabsOrganismConfig[] = [
  { label: "Journal", index: "1", herf: "journal" },
  {
    label: `${currentMonth} Stats`,
    index: "2",
    herf: "monthly-stats",
  },
  {
    label: "All time stats",
    index: "3",
    herf: "all-time-stats",
  },
];