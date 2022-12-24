import React from 'react';
import styles from './textcontent.css';
interface ITitleProps {
  author?: string;
  title?: string;
}
export function TextContent({title, author}: ITitleProps) {
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
            4 часа назад</span>
      </div>
      <h2 className={styles.title}>
        <a href="#post-url" className={styles.postLink}>
          {title}
        </a>
      </h2>
    </div>
  );
}
