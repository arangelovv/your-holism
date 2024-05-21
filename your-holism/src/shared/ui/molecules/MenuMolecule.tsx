import { MenuMoleculeConfig } from "../models/menu.config";
import { Menu, MenuItem, Paper } from "@mui/material";
import ListItemIcon from "@mui/material/ListItemIcon";

/**
 * MenuMolecule component renders a Material-UI Menu with configurable items.
 *
 * @param {MenuMoleculeConfig} props - The configuration object for the menu.
 * @param {HTMLElement | null} props.anchorElement - The element that the menu should anchor to. If null, the menu is not displayed.
 * @param {Array<MenuItemConfig>} props.items - The array of menu items to be displayed. Each item should have a label, an optional icon, and an onClick handler.
 * @param {Function} props.onCloseHandler - Function to call when the menu is closed.
 *
 * Example usage:
 *
 * ```jsx
 * import React from 'react';
 * import MenuMolecule from './MenuMolecule';
 * import SettingsIcon from '@mui/icons-material/Settings';
 *
 * function App() {
 *   const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
 *
 *   const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
 *     setAnchorEl(event.currentTarget);
 *   };
 *
 *   const handleClose = () => {
 *     setAnchorEl(null);
 *   };
 *
 *   const menuItems = [
 *     { label: "Settings", icon: <SettingsIcon />, onClick: handleClose }
 *   ];
 *
 *   return (
 *     <div>
 *       <button aria-controls="basic-menu" aria-haspopup="true" onClick={handleClick}>
 *         Open Menu
 *       </button>
 *       <MenuMolecule items={menuItems} anchorElement={anchorEl} onCloseHandler={handleClose} />
 *     </div>
 *   );
 * }
 *
 * export default App;
 * ```
 */

export default function MenuMolecule({
  anchorElement,
  items,
  onCloseHandler,
  menuWidth,
  menuBorderRadisu,
  menuPaddingLeft,
  menuPaddingRight,
  menuPaddingTop,
  menuMargin,
  menuPaddingBottom,
  menuItemBorderRadisu,
}: MenuMoleculeConfig) {
  const open = Boolean(anchorElement);

  return (
    <div>
      <Menu
        slotProps={{
          paper: {
            sx: {
              width: `${menuWidth}`,
              borderRadius: `${menuBorderRadisu}`,
              paddingLeft: `${menuPaddingLeft}`,
              paddingRight: `${menuPaddingRight}`,
              paddingTop: `${menuPaddingTop}`,
              paddingBottom: `${menuPaddingBottom}`,
              margin: `${menuMargin}`,
            },
          },
        }}
        id="basic-menu"
        anchorEl={anchorElement}
        open={open}
        onClose={onCloseHandler}
        MenuListProps={{
          "aria-labelledby": "basic-button",
          autoFocusItem: false,
        }}
      >
        {items?.map((item) => (
          <MenuItem
            sx={{ borderRadius: `${menuItemBorderRadisu}` }}
            onClick={item.onClick}
          >
            {!!item.icon ? <ListItemIcon>{item.icon}</ListItemIcon> : null}
            {item.label}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
}
