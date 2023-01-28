import React, {useRef} from 'react';
import styles from './dropdown_.css';

interface IDropdownProps {
  button: React.ReactNode;
  children: React.ReactNode;
  isOpen?: boolean;
  onClose?: () => void;
  onOpen?: () => void;
}

const NOOP = () => {}

export function Dropdown_({ button, children, isOpen, onClose = NOOP, onOpen = NOOP}: IDropdownProps) {
  const [isDropdownOpen, setIsDropdownOpen] = React.useState(isOpen);
  const ref = useRef<HTMLDivElement>(null)
  React.useEffect(() =>setIsDropdownOpen(isOpen), [isOpen]);
  React.useEffect(() => isDropdownOpen ? onOpen() : onClose(), [isDropdownOpen])

  const handleOpen = (e: any) => {
    if (isOpen === undefined) {
      setIsDropdownOpen((!isDropdownOpen))
    }
  }

  return (
    <div className={styles.container}>
      <div onClick={handleOpen} ref={ref}>
        { button }
      </div>
      { isDropdownOpen && (
        <div className={styles.listContainer}>
          <div className={styles.list} onClick={() => setIsDropdownOpen(false)}>
            {children}
          </div>
        </div>
      )}
    </div>
  );
}
