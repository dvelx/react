import React from 'react';
import styles from './cardslist.css';
import {Card} from "./Card";
import {postsContext, PostsContextProvider} from "../context/postsContext";

export function CardsList() {
  const posts = React.useContext(postsContext)

  return (
    <ul className={styles.cardsList}>
      <PostsContextProvider>
        <Card />
      </PostsContextProvider>
    </ul>
  );
}
