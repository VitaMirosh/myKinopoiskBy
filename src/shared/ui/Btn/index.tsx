import type { ReactNode } from "react"

type Props = {
  children?: ReactNode
  className?: string
  onClick?: () => void
  disabled?: boolean
}
export const Btn = ({ children, onClick, className, disabled }: Props) => {
  return (
    <button className={className} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  )
}
