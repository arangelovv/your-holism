import AvatarAtom from "../../shared/ui/atoms/AvatarAtom";
import AppBarOrganism from "../../shared/ui/organisms/AppBar.org";
import TabsOrganism from "../../shared/ui/organisms/Tabs.org";
import { tabsConfig, appBarConfig } from "./core.config";
import { Box } from "@mui/material";
import { useCurrentUser } from "../../shared/firebase/authentication/firebase.auth";
import { auth } from "../../shared/firebase/firebase";

export default function AppCorePage() {
  const currentUser = useCurrentUser(auth);

  console.log(currentUser?.displayName);

  return (
    <Box sx={{ padding: "5px" }}>
      <AppBarOrganism {...appBarConfig}>
        <AvatarAtom
          alt={currentUser?.displayName ?? "Default Name"}
          src={currentUser?.photoURL ?? "/default-avatar.jpg"}
        />
      </AppBarOrganism>
      <TabsOrganism tabs={tabsConfig} />
    </Box>
  );
}
