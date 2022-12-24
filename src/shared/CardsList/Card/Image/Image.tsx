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
        src={src ? src : 'https://cdn.dribbble.com/userupload/4149333/file/original-a51d53f2dbbaa3eef278f33b107f63be.png?compress=1&resize=800x600&vertical=top'}
        alt="Картинка автора"
      />
    </div>
  );
}
