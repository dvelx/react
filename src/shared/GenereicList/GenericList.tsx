import React from "react";

interface IItem {
  element: React.ReactNode;
  id: string;
  onClick?: (id: string) => void;
  className?: string;
  As?: 'a' | 'li' | 'button' | 'div';
  href?: string;
}
const NOOP = () => {}

interface IGenericListProps {
  list: IItem[];
}

export function GenericList({ list }: IGenericListProps) {
  return (
    <>
      {list.map(({ As = 'div', element, onClick = NOOP,className, id, href}) => (
        <As
          className={className}
          onClick={() => onClick(id)}
          key={id}
          href={href}
        >
          {element}
        </As>
      ))}
    </>
  )
}
