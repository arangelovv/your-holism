import { Box } from "@mui/material";

import AvatarAtom from "../../shared/ui/atoms/AvatarAtom";
import AppBarOrganism from "../../shared/ui/organisms/AppBar.org";
import TabsOrganism from "../../shared/ui/organisms/Tabs.org";
import { tabsConfig, appBarConfig } from "./core.config";
import {
  authSignOut,
  signInWithGoogle,
  useCurrentUser,
} from "../../shared/firebase/authentication/firebase.auth";
import { auth } from "../../shared/firebase/firebase";
import MenuMolecule from "../../shared/ui/molecules/MenuMolecule";
import { useState } from "react";
import { MenuItemsConfig } from "../../shared/ui/models/menu.config";
import LogoutIcon from "@mui/icons-material/Logout";
import LoginIcon from "@mui/icons-material/Login";
import PersonIcon from "@mui/icons-material/Person";

export default function AppCorePage() {
  const currentUser = useCurrentUser(auth);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const handleOpen = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const menuItems: MenuItemsConfig[] = currentUser
    ? [
        {
          label: "User Profile",
          icon: <PersonIcon fontSize="small" />,
        },
        {
          label: "Sign Out",
          icon: <LogoutIcon fontSize="small" />,
          onClick: () => {
            authSignOut();
            setAnchorEl(null);
          },
        },
      ]
    : [
        {
          label: "Sign In",
          icon: <LoginIcon />,
          onClick: () => {
            signInWithGoogle();
            setAnchorEl(null);
          },
        },
      ];

  return (
    <Box sx={{ padding: "5px" }}>
      <AppBarOrganism {...appBarConfig}>
        <AvatarAtom
          alt={currentUser?.displayName ?? "Default Name"}
          src={currentUser?.photoURL ?? "/default-avatar.jpg"}
          onClick={handleOpen}
        />
        <MenuMolecule
          items={menuItems}
          anchorElement={anchorEl}
          onCloseHandler={handleClose}
          menuWidth="150px"
          menuBorderRadisu="10px"
          menuPaddingLeft="8px"
          menuPaddingRight="8px"
          menuMargin="5px"
          menuItemBorderRadisu="6px"
        ></MenuMolecule>
      </AppBarOrganism>
      <TabsOrganism tabs={tabsConfig} />
    </Box>
  );
}
