import React from 'react';
import styles from './menudropdown.css';
import {generateId} from "../../../../utils/react/generateRandomIndex";
import {Dropdown} from "../../../Dropdown";
import {GenericList} from "../../../GenereicList/GenericList";
import {CommentIcon, MenuIcon, SaveIcon, SharedIcon, StopIcon, WarningIcon} from "../../../Icons";
const ReactDOM = require('react-dom');


const MENULIST = [
  {
    As: 'div' as const,
    element: (
      <div>
        <CommentIcon />
        <p>Комментарии</p>
      </div>
    ),
    className: styles.menuItem
  },
  {
    As: 'div' as const,
    element: (
      <div>
        <SharedIcon />
        <p>Поделиться</p>
      </div>
    ),
    className: styles.menuItem
  },
  {
    As: 'div' as const,
    element: (
      <div>
        <StopIcon />
        <p>Скрыть</p>
      </div>
    ),
    className: styles.menuItem
  },
  {
    As: 'div' as const,
    element: (
      <div>
        <SaveIcon />
        <p>Сохранить</p>
      </div>
    ),
    className: styles.menuItem
  },
  {
    As: 'div' as const,
    element: (
      <div>
        <WarningIcon />
        <p>Пожаловаться</p>
      </div>
    ),
    className: styles.menuItem
  }
].map(generateId)

export function MenuDropdown() {
  const [list, setList] = React.useState(MENULIST);

  const node = document.querySelector('#dropdown-root')
  if (!node) return null

  return ReactDOM.createPortal((
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
  ), node);
}
