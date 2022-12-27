import React from 'react';
import styles from './card.css';
import {TextContent} from "./TextContent";
import {Image} from "./Image";
import {Buttons} from "./Buttons";

interface ICardProps {
  key?: string;
  title?: string;
  author?: string;
  url?: string;
  score?: number;
  createdAt: number;
  num_comments?: number
}
export function Card({title, author, url, score, createdAt, num_comments}: ICardProps) {


  return (
    <li className={styles.card}>
      <TextContent title={title} author={author} dateCreated={createdAt}/>
      <Image src={url} />
      <Buttons score={score} num_comments={num_comments}/>
    </li>
  );
}
