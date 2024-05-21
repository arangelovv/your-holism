export interface MenuItemsConfig {
  label: string;
  icon?: any;
  onClick?(): any;
}

export interface MenuMoleculeConfig {
  anchorElement: null | HTMLElement;
  items: MenuItemsConfig[];
  onCloseHandler(): any;
  menuWidth?: string;
  menuBorderRadisu?: string;
  menuPaddingLeft?: string;
  menuPaddingRight?: string;
  menuPaddingTop?: string;
  menuMargin?: string;
  menuItemBorderRadisu?: string;
  menuPaddingBottom?: string;
}
