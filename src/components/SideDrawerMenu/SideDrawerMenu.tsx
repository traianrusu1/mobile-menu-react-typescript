import React, { useState } from 'react';
import styles from './SideDrawerMenu.module.scss';
import { SideDrawerMenuItem as SideDrawerMenuItemInterface } from '../../interfaces/SideDrawerMenuItem';
import { SideDrawerMenuItem } from '..';
import { MobileMenuConfig } from '../../interfaces/MobileMenuConfig';
import useCustomConfig from '../../hooks/useCustomConfig';

interface Props {
  menuItems: SideDrawerMenuItemInterface[] | null;
  handleShowChildMenu: (show: boolean) => void;
  showChildrenMenu?: boolean;
  isChildMenu?: boolean;
  config?: MobileMenuConfig;
}

const SideDrawerMenu: React.FC<Props> = ({
  menuItems,
  handleShowChildMenu,
  showChildrenMenu = false,
  isChildMenu = false,
  config,
}: Props) => {
  const [showChildMenu, setShowChildMenu] = useState(showChildrenMenu);
  const [parentItems, setParentItems] = useState<SideDrawerMenuItemInterface[] | null>(menuItems);
  const [prevParentItems, setPrevParentItems] = useState<SideDrawerMenuItemInterface[] | null>(
    menuItems,
  );
  const [clickedItem, setClickedItem] = useState<SideDrawerMenuItemInterface | null>(null);
  const customStyles = useCustomConfig(config, ['secondaryColor']);

  const handleItemClick = (item: SideDrawerMenuItemInterface): void => {
    if (item.link) {
      window.location.href = item.link;
    } else if (item.children) {
      handleShowChildMenu(!showChildMenu);
      if (parentItems?.length === 1 && item?.name === parentItems[0].name) {
        setParentItems(menuItems);
      } else {
        setParentItems([item]);
      }
      setShowChildMenu((prevState) => !prevState);

      if (item.name === clickedItem?.name) {
        setClickedItem(null);
      } else {
        setClickedItem(item);
      }
    }
  };

  const handleShowChildMenuInner = (show: boolean): void => {
    // debugger;
    if (!show) {
      setParentItems(prevParentItems);
    } else {
      setPrevParentItems(parentItems);
    }
  };

  return (
    <div
      className={`${styles.sideDrawerMenu} ${isChildMenu ? styles.childMenu : ''}`}
      style={isChildMenu ? customStyles : undefined}
    >
      {parentItems?.map((item) => (
        <>
          <SideDrawerMenuItem
            key={item.name}
            item={item}
            onItemClick={handleItemClick}
            isHeading={clickedItem?.name === parentItems[0].name}
          />

          {showChildMenu && item.children && (
            <div
              className={`${styles.childMenuDynamic} ${
                showChildMenu && item.children ? styles.open : styles.closed
              }`}
            >
              <SideDrawerMenu
                menuItems={item.children}
                isChildMenu
                handleShowChildMenu={handleShowChildMenuInner}
                config={config}
              />
            </div>
          )}
        </>
      ))}
    </div>
  );
};

export default SideDrawerMenu;
