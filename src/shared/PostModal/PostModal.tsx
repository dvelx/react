import React from 'react';
import styles from './postmodal.css';



export function PostModal() {
  const node = document.querySelector('#modal-root')
  if (!node) return null;
  return (
    <div className={styles.modal}>
      <h2>
       LoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLorem
      </h2>

      <div className={styles.modalContent}>
        <p>LoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLorem</p>
        <p>LoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLorem</p>
        <p>LoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLorem</p>
      </div>
    </div>
    );
}
