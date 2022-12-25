import React, {useContext, useEffect} from 'react';
import styles from './cardslist.css';
import {Card} from "./Card";
import {postsContext} from "../context/postsContext";

interface IPostContextObject {
  [N: string]: any
}
export function CardsList() {
  const posts = useContext(postsContext)
  if (Object.keys(posts).length > 0) {
    return (
      <ul className={styles.cardsList}>
        {}
      </ul>
    );
  } else {
    return (
      <ul className={styles.cardsList}>
        {}
      </ul>
    )
  }
}

//posts.map((post: any) => <Card key={post.data.id} title={post.data.title} author={post.data.author} url={post.data.url}/>)
