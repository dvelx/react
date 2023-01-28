import React from 'react';
import styles from './dropdown.css';
import {GenericList} from "../GenereicList/GenericList";
import {CommentIcon, SaveIcon, SharedIcon, StopIcon, WarningIcon} from "../Icons";
import {generateId} from "../../utils/react/generateRandomIndex";
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
].map(generateId);

interface IDropdownProps {
  onClick: () => void;
  btnRect: Array<number>;
}

export function Dropdown({ onClick, btnRect }: IDropdownProps) {
  const [list, setList] = React.useState(MENULIST);
  const node = document.getElementById("dropdown-root");
  if (!node) return null;

  return ReactDOM.createPortal(
    <div
      className={styles.container}
      style={{ left: btnRect[0], top: btnRect[1] + btnRect[2] }}>
      <div className={styles.listContainer} onClick={() => onClick()}>
        <GenericList list={list} />
      </div>
    </div>,
    node
  );
}
