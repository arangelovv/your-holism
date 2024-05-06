import AppBarOrganism from "../../shared/ui/organisms/AppBar.org";
import TabsOrganism from "../../shared/ui/organisms/Tabs.org";
import { tabsConfig, appBarConfig } from "./core.config";

export default function AppCorePage() {
  return (
    <div className="core-container">
      <AppBarOrganism {...appBarConfig} />
      <div>
        <TabsOrganism tabs={tabsConfig} />
      </div>
    </div>
  );
}
