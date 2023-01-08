import React, {useEffect, useRef} from 'react';
import styles from './menudropdownlist.css';
import {CommentIcon, SaveIcon, SharedIcon, StopIcon, WarningIcon} from "../Icons";
import {generateId} from "../../utils/react/generateRandomIndex";
import {GenericList} from "../GenereicList/GenericList";
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

interface IMenuDropdownList {
    onClose?: () => void;
    id?: string;
    left?: number
}
export function MenuDropdownList({onClose, id, left}: IMenuDropdownList) {
  const [list, setList] = React.useState(MENULIST);
  const ref = useRef<HTMLDivElement>(null)
  useEffect(() => {
      function handleClick(event: MouseEvent) {
          if (event.target instanceof Node && !ref.current?.contains(event.target)) {
              onClose?.()
          }
      }
      document.addEventListener('click', handleClick)

      return () => {
          document.removeEventListener('click', handleClick)
      }
  }, [])


  const node = document.querySelector('#dropdown-root')
  if (!node) return null

  return ReactDOM.createPortal((
      <div className={styles.container} ref={ref} id={id}>
          <GenericList list={list} />
      </div>
  ), node);
}
