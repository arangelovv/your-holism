import { AppBarOrganismConfig } from "../../shared/ui/models/app-bar.config";
import { TabsOrganismConfig } from "../../shared/ui/models/tabs.config";
import TodayIcon from "@mui/icons-material/Today";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import AutoGraphIcon from "@mui/icons-material/AutoGraph";

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
  {
    label: "Journal",
    index: "1",
    herf: "journal",
    icon: <TodayIcon fontSize="small" />,
    iconPosition: "start",
  },
  {
    label: `${currentMonth} Stats`,
    index: "2",
    herf: "monthly",
    icon: <CalendarMonthIcon fontSize="small" />,
    iconPosition: "start",
  },
  {
    label: "Overall Stats",
    index: "3",
    herf: "overall",
    icon: <AutoGraphIcon fontSize="small" />,
    iconPosition: "start",
  },
];
export const appBarConfig: AppBarOrganismConfig = {
  color: "#e6e6e6",
  position: "sticky",
  title: "Your Holism",
  titleColor: "#333333",
  paddingLeft: "5px",
  paddingRight: "5px",
  borderRadius: "10px",
};
