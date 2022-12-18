import React from 'react';
import styles from './menudropdown.css';
import {generateId} from "../../../../utils/react/generateRandomIndex";
import {Dropdown} from "../../../Dropdown";
import {GenericList} from "../../../GenereicList/GenericList";
import {merge} from "../../../../utils/js/merge";


const MENULIST = [
  {As: 'li' as const, text: 'Комментарии', className: 'styles.menuItem'},
  {As: 'li' as const, text: 'Поделиться', className: 'styles.menuItem'},
  {As: 'li' as const, text: 'Скрыть', className: 'styles.menuItem'},
  {As: 'li' as const, text: 'Сохранить', className: 'styles.menuItem'},
  {As: 'li' as const, text: 'Пожаловаться', className: 'styles.menuItem'},
].map(generateId)

export function MenuDropdown() {
  const [list, setList] = React.useState(MENULIST);

  return (
    <div className={styles.menu}>
      <Dropdown
        button={
        <button className={styles.menuButton}>
          <svg width="5" height="20" viewBox="0 0 5 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="2.5" cy="2.5" r="2.5" fill="#D9D9D9"/>
            <circle cx="2.5" cy="10" r="2.5" fill="#D9D9D9"/>
            <circle cx="2.5" cy="17.5" r="2.5" fill="#D9D9D9"/>
          </svg>
        </button>
      }>
      <ul className={styles.menuItem}>
        <GenericList list={list.map(merge({ onClick: () => {} }))} />
      </ul>
      </Dropdown>
    </div>
  );
}
