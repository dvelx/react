import React, {useState} from 'react';
import styles from './textcontent.css';
import {PostModal} from "../../../PostModal";

interface ITitleProps {
  author?: string;
  title?: string;
  dateCreated: number
}
export function TextContent({title, author, dateCreated}: ITitleProps) {
  const [ isModalOpened, setIsModalOpen] = useState(false)
  const calcDateCreatedAt = (new Date().getTime() - (new Date(dateCreated*1000)).getTime())
  const date = new Date(calcDateCreatedAt).getHours()

  return (
    <div className={styles.textContent}>
      <div className={styles.metaData}>
        <div className={styles.userLink}>
          <img
            className={styles.avatar}
            src="https://cdn.dribbble.com/users/870476/avatars/mini/9060216b1bc79500eeab603671d5d0a8.png?1574899370"
            alt="avatar"/>
          <a href="#user-url" className={styles.username}>{author}</a>
        </div>
        <span className={styles.createdAt}>
            <span className={styles.publishedLabel}>опубликовано</span>
          {date} часа назад</span>
      </div>
      <h2 className={styles.title}>
        <a href="#post-url" className={styles.postLink} onClick={() => setIsModalOpen(true)}>
          {title}
        </a>

        { isModalOpened && (
          <PostModal />
        )}
      </h2>
    </div>
  );
}
