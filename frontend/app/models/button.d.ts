import { ReactNode } from "react"
import { ClassName } from "./types"

//types
type ModalTarget = ReactNode
type cb = ()=>void
//Standard
export interface BtnProps {
  actionTarget?: "openModal" | "openRoute"
  target?: ModalTarget
  onClick?: ()=>void
  children: ReactNode
  className?: ClassName
}

//Modal
export interface ModalBtnProps extends Omit<BtnProps, 'actionTarget'> {}

export interface ModalCtnProps {
  isOpen: any
  onOpenChange: any
  content: ModalTarget
}