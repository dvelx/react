import React from 'react';
import styles from './card.css';
import {TextContent} from "./TextContent";
import {Image} from "./Image";
import {Buttons} from "./Buttons";


export function Card() {

  return (
    <li className={styles.card}>
      <TextContent />
      <Image />
      <Buttons />
    </li>
  );
}
