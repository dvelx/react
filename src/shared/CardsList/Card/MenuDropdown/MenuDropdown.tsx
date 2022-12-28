import React from 'react';
import styles from './menudropdown.css';
import {Dropdown} from "../../../Dropdown";
import {MenuIcon} from "../../../Icons";
import {MenuDropdownList} from "../../../MenuDropdownList";

interface IMenuDropdown {
    id?: string
}

export function MenuDropdown({id}: IMenuDropdown) {

  return (
    <div>
      <Dropdown
        button={
        <button className={styles.menuButton} id={id}>
          <MenuIcon />
        </button>
      }>
      <MenuDropdownList id={id}/>
      </Dropdown>
    </div>
  );
}
