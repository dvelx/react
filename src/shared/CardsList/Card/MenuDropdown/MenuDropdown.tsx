import React, {MouseEventHandler, useEffect, useRef} from 'react';
import styles from './menudropdown.css';
import {Dropdown} from "../../../Dropdown";
import {MenuIcon} from "../../../Icons";
import {MenuDropdownList} from "../../../MenuDropdownList";

interface IMenuDropdown {
    id?: string;
    onClick?: () => void;
    left?: number;
    top?: number;
}

export function MenuDropdown({id, left, top}: IMenuDropdown) {

  const ref = useRef<HTMLButtonElement>(null)
  let leftRect: number
  let topRect: number
  function onClickBtn(e: MouseEvent) {

    if (e.target instanceof Node && ref.current?.contains(e.target)) {
      leftRect = ref.current?.getBoundingClientRect().x
      topRect = ref.current?.getBoundingClientRect().y
    }
  }
    setTimeout(() => {
      document.addEventListener('click', onClickBtn)
    })

  return (
    <div>
      <Dropdown
        button={
        <button className={styles.menuButton} id={id} ref={ref}>
          <MenuIcon />
        </button>
      }>
      <MenuDropdownList id={id}/>
      </Dropdown>
    </div>
  );
}
