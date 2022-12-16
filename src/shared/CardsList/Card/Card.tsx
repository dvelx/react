import React from 'react';
import styles from './card.css';
import {CardTextContent} from "./CardTextContent";
import {CardImage} from "./CardImage";
import {CardButtons} from "./CardButtons";

export function Card() {
  return (
    <li className={styles.card}>
      <CardTextContent />
      <CardImage />
      <CardButtons />
    </li>
  );
}
