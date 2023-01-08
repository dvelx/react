import React, {MouseEventHandler, useRef} from 'react';
import styles from './dropdown.css';

interface IDropdownProps {
  button: React.ReactNode;
  children: React.ReactNode;
  isOpen?: boolean;
  onClose?: () => void;
  onOpen?: () => void;
  left?: number;
  top?: number
}

const NOOP = () => {}

export function Dropdown({ button, children, isOpen, onClose = NOOP, onOpen = NOOP, left, top}: IDropdownProps) {
  const [isDropdownOpen, setIsDropdownOpen] = React.useState(isOpen);
  const ref = useRef<HTMLDivElement>(null)
  React.useEffect(() =>setIsDropdownOpen(isOpen), [isOpen]);
  React.useEffect(() => isDropdownOpen ? onOpen() : onClose(), [isDropdownOpen])

  const handleOpen = (e: any) => {
    if (isOpen === undefined) {
      setIsDropdownOpen((!isDropdownOpen))
    }
    if (e.target instanceof Node && ref.current?.contains(e.target)) {
      left = ref.current?.getBoundingClientRect().x;
      top = ref.current?.getBoundingClientRect().y;
    }
  }
  console.log(left, top)
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
