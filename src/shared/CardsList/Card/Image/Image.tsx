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
        src={src !== 'self' && src !== 'default' && src !== 'nsfw' ? src : 'https://lmedia.xyz/placeholder.png'}
        alt="Картинка автора"
      />
    </div>
  );
}
