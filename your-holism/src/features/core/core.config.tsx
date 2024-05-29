import TodayIcon from "@mui/icons-material/Today";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import AutoGraphIcon from "@mui/icons-material/AutoGraph";
import { SingleTabConfig } from "../../LibFacade/src/ui/models/tabs.config";
import { AppBarOrganismConfig } from "../../LibFacade/src/ui/models/app-bar.config";
import MonthlyStatsPage from "../$monthly/MonthlyStatsPage";
import JournalPage from "../$journal/JournalPage";
import AllStatsPage from "../$overall/AllStatsPage";

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

export const tabsConfig: SingleTabConfig[] = [
  {
    label: "Journal",
    index: "1",
    icon: <TodayIcon fontSize="small" />,
    iconPosition: "start",
    children: <JournalPage />,
  },
  {
    label: `${currentMonth} Stats`,
    index: "2",
    icon: <CalendarMonthIcon fontSize="small" />,
    iconPosition: "start",
    children: <MonthlyStatsPage />,
  },
  {
    label: "Overall Stats",
    index: "3",
    icon: <AutoGraphIcon fontSize="small" />,
    iconPosition: "start",
    children: <AllStatsPage />,
  },
];

export const appBarConfig: AppBarOrganismConfig = {
  color: "#e6e6e6",
  position: "sticky",
  title: "Your Holism",
  titleColor: "#333333",
  paddingLeft: "5px",
  paddingRight: "5px",
  borderStyle: "extra-rounded",
  elevation: "none",
};
