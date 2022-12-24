import React, {useContext} from 'react';
import styles from './cardslist.css';
import {Card} from "./Card";
import {postsContext} from "../context/postsContext";


export function CardsList() {
  const posts = useContext(postsContext)

  return (
    <ul className={styles.cardsList}>
      {posts.map((post) => <Card key={post.id} title={post.title} author={post.author} url={post.url}/>)}
    </ul>
  );
}
