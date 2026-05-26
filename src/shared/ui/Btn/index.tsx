import type {ReactNode} from 'react';

type Props = {
  children?: ReactNode
  className?: string
  onClick?: () => void
}
export const Btn = ({children,onClick,className}:Props) => {

  return (
    <button className={className} onClick={onClick}>
      {children}
    </button>
  );
};

