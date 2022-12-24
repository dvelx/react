import React from 'react';
import styles from './card.css';
import {TextContent} from "./TextContent";
import {Image} from "./Image";
import {Buttons} from "./Buttons";

interface ICardProps {
  key?: string
  title?: string
  author?: string
  url?: string
}
export function Card({title, author, url}: ICardProps) {

  return (
    <li className={styles.card}>
      <TextContent title={title} author={author}/>
      <Image src={url} />
      <Buttons />
    </li>
  );
}
