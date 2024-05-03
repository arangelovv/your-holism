import AppBarOrganism from "../../shared/ui/organisms/AppBar.org";
import TabsOrganism from "../../shared/ui/organisms/tabs.org";
import { tabsConfig } from "./core.config";

export default function AppCorePage() {
  return (
    <div className="core-container">
      <AppBarOrganism />
      <TabsOrganism tabs={tabsConfig} />
    </div>
  );
}
