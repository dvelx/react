import React from 'react';
import styles from './menudropdown.css';
import {generateId} from "../../../../utils/react/generateRandomIndex";
import {Dropdown} from "../../../Dropdown";
import {GenericList} from "../../../GenereicList/GenericList";
import {merge} from "../../../../utils/js/merge";
import {CommentIcon, MenuIcon, SaveIcon, SharedIcon, StopIcon, WarningIcon} from "../../../Icons";


const MENULIST = [
  {As: 'div' as const, element: <CommentIcon />, text: 'Kомментарии', className: 'menuItem' },
  {As: 'div' as const, element: <SharedIcon />, text: 'Поделиться', className: 'menuItem'},
  {As: 'div' as const, element: <StopIcon />, text: 'Скрыть', className: 'menuItem'},
  {As: 'div' as const, element: <SaveIcon />, text: 'Сохранить', className: 'menuItem'},
  {As: 'div' as const, element: <WarningIcon />, text: 'Пожаловаться', className: 'menuItem'},
].map(generateId)

export function MenuDropdown() {
  const [list, setList] = React.useState(MENULIST);

  return (
    <div>
      <Dropdown
        button={
        <button className={styles.menuButton}>
          <MenuIcon />
        </button>
      }>
      <div className={styles.menuContainer}>
        <GenericList list={list} />
      </div>
      </Dropdown>
    </div>
  );
}
