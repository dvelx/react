import React, {MouseEventHandler, useEffect, useRef} from 'react';
import styles from './menudropdown.css';
import {Dropdown} from "../../../Dropdown";
import {MenuIcon} from "../../../Icons";
import {MenuDropdownList} from "../../../MenuDropdownList";

interface IMenuDropdown {
    id?: string;
    onClick?: () => void
}

export function MenuDropdown({id, onClick}: IMenuDropdown) {

    const ref = useRef<HTMLButtonElement>(null)

    useEffect(() => {
        const onClick = (e: MouseEvent) =>e.target instanceof Node && ref.current?.contains(e.target) || console.log(e.target)
        document.addEventListener('click', onClick)
        return () => document.removeEventListener('click', onClick)
    }, [])

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
