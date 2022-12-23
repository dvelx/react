import React from 'react';
import { IconAnon } from '../../../Icons';
import styles from './userblock.css';

interface IUSerBlockProps {
  avatarSrc?: string;
  username?: string
}

export function UserBlock({ avatarSrc, username }: IUSerBlockProps) {
  return (
    <a
      href={`https://www.reddit.com/api/v1/authorize?client_id=${process.env.CLIENT_ID}&response_type=code&state=random_string&redirect_uri=http://localhost:3000//auth&duration=permanent&scope=read submit identity`}
      className={styles.userBox}>
      <div className={styles.avatarBox}>
        {avatarSrc
        ? <img src={avatarSrc} alt="user avatar" className={styles.avatarImage} />
        : <IconAnon />
        }
      </div>

      <div className={styles.username}>
        <p>
          { username ? username : 'Аноним'}
        </p>
      </div>
    </a>
  );
}
