import React from 'react';
import styles from './image.css';

interface IUrlImg {
  src?: string
}

const regexp = '\^https?://\S+(?:jpg|jpeg|png)$'

export function Image({src}: IUrlImg) {
  console.log(src)
  return (
    <div className={styles.preview}>
      <img
        className={styles.previewImg}
        src={src}
        alt="Картинка автора"
      />
    </div>
  );
}
