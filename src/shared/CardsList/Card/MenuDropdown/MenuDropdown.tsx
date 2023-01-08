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

  function onClickBtn(e: MouseEvent) {

    if (e.target instanceof Node && ref.current?.contains(e.target)) {
      left = ref.current?.getBoundingClientRect().x;
      top = ref.current?.getBoundingClientRect().y;
    }
    return
  }

  function click() {
      document.addEventListener('click', onClickBtn)
  }



  return (
    <div>
      <Dropdown
        button={
        <button className={styles.menuButton} id={id} ref={ref} onClick={click}>
          <MenuIcon />
        </button>
      }>
      <MenuDropdownList id={id} left={left}/>
      </Dropdown>
    </div>
  );
}
