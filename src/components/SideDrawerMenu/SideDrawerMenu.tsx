import React, { useState } from 'react';
import styles from './SideDrawerMenu.module.scss';
import { SideDrawerMenuItem as SideDrawerMenuItemInterface } from '../../interfaces/SideDrawerMenuItem';
import { SideDrawerMenuItem } from '..';

interface Props {
  menuItems: SideDrawerMenuItemInterface[] | null;
  handleShowChildMenu: (show: boolean) => void;
  showChildrenMenu?: boolean;
  isChildMenu?: boolean;
}

const SideDrawerMenu: React.FC<Props> = ({
  menuItems,
  handleShowChildMenu,
  showChildrenMenu = false,
  isChildMenu = false,
}: Props) => {
  const [showChildMenu, setShowChildMenu] = useState(showChildrenMenu);
  const [parentItems, setParentItems] = useState<SideDrawerMenuItemInterface[] | null>(menuItems);
  const [clickedItem, setClickedItem] = useState<SideDrawerMenuItemInterface | null>(null);
  const handleItemClick = (item: SideDrawerMenuItemInterface): void => {
    if (item.link) {
      window.location.href = item.link;
    } else if (item.children) {
      handleShowChildMenu(!showChildMenu);
      // debugger;
      if (parentItems?.length === 1 && item?.name === parentItems[0].name) {
        setParentItems(menuItems);
      } else {
        setParentItems([item]);
      }
      setShowChildMenu((prevState) => !prevState);
      // debugger;

      if (item.name === clickedItem?.name) {
        setClickedItem(null);
      } else {
        setClickedItem(item);
      }
    }
  };

  const handleShowChildMenuInner = (show: boolean): void => {
    // debugger;
    if (show) {
      setParentItems(menuItems);
    }
  };

  // const myHandleShowChildMenu = (params) => {};

  // useEffect(() => {
  //   setParentItems();
  // }, [showChildMenu]);

  return (
    <div className={`${styles.sideDrawerMenu} ${isChildMenu ? styles.childMenu : ''}`}>
      {parentItems?.map((item) => (
        <>
          {/* {!showChildMenu && ( */}
          <SideDrawerMenuItem
            key={item.name}
            item={item}
            onItemClick={handleItemClick}
            isHeading={clickedItem?.name === parentItems[0].name}
          />
          {/* )} */}

          {showChildMenu && item.children && (
            <div
              className={`${styles.childMenu} ${
                showChildMenu && item.children ? styles.open : styles.closed
              }`}
            >
              <SideDrawerMenu
                menuItems={item.children}
                isChildMenu
                handleShowChildMenu={handleShowChildMenuInner}
              />
            </div>
          )}
          {/* )} */}
        </>
      ))}
    </div>
  );
};

export default SideDrawerMenu;
