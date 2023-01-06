import React, {MouseEventHandler, useEffect, useRef} from 'react';
import styles from './menudropdown.css';
import {Dropdown} from "../../../Dropdown";
import {MenuIcon} from "../../../Icons";
import {MenuDropdownList} from "../../../MenuDropdownList";

interface IMenuDropdown {
    id?: string;
    onClick?: () => void
}

export function MenuDropdown({id}: IMenuDropdown) {

  const ref = useRef<HTMLButtonElement>(null)


    function onClickBtn(e: MouseEvent) {
      if (e.target instanceof Node && !ref.current?.contains(e.target)) {
        console.log(ref.current?.getBoundingClientRect())
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
