import React, { useEffect, useRef, useState} from 'react';
import styles from './menudropdown.css';
import {Dropdown} from "../../../Dropdown";



export interface IMenuProps {
  onClick: () => void;
}

export function MenuDropdown() {
  const [isOpen, setOpen] = useState(false);
  const [btnRect, setBtnRect] = useState([0, 0]);
  const btnRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (isOpen) {
      if (!btnRef.current) return;
      const rect = btnRef.current.getBoundingClientRect();
      setBtnRect([rect.left, rect.top, rect.height]);
      console.log(rect)
    }
  }, [isOpen]);

  return (
    <div className={styles.menu}>
      <button
        className={styles.menuButton}
        onClick={() => {
          setOpen(!isOpen);
        }}
        ref={btnRef}>
      </button>
      {isOpen && (
        <Dropdown
          {...{ onClick: () => setOpen(!isOpen), btnRect }}
        />
      )}
    </div>
  );
}
