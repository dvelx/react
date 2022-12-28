import React, {useContext} from 'react';
import styles from './cardslist.css';
import {Card} from "./Card";
import {postsContext} from "../context/postsContext";

interface IPostContextObject {
  [N: string]: any
}
interface IPostCardData {
    id?: string
    author: string;
    title: string;
    thumbnail?: string;
    score?: number;
    num_comments?: number;
    created: number;
    sr_detail?: {
      icon_img?: string
    }
}
export function CardsList() {
  const posts: IPostContextObject = useContext(postsContext)
  if (Object.keys(posts).length > 0) {
    return (
      <ul className={styles.cardsList}>
        { posts.map((post: IPostCardData) => <Card key={post.id}
                                                   title={post.title}
                                                   author={post.author}
                                                   url={post.thumbnail}
                                                   score={post.score}
                                                   createdAt={post.created}
                                                   num_comments={post.num_comments}
                                                   id={post.id}
        />) }
      </ul>
    );
  } else {
    return (
      <ul className={styles.cardsList}>
        { }
      </ul>
    );
  }
}
//{} ? [] : { posts.map((post: IPostCardData) => <Card key={post.id} title={post.title} author={post.author} url={post.thumbnail}/>) }

