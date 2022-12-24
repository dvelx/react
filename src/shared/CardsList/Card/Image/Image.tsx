import React from 'react';
import styles from './image.css';

interface IUrlImg {
  src?: string
}
export function Image({src}: IUrlImg) {
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
