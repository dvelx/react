import React, {useContext} from 'react';
import styles from './searchblock.css';
import {UserBlock} from "./UserBlock";
import {userContext} from "../../context/userContext";

export function SearchBlock() {
  const { iconImg, name } = useContext(userContext)
  return (
    <div className={styles.searchBlock}>
      <UserBlock avatarSrc={iconImg} username={name} />
    </div>
  );
}
