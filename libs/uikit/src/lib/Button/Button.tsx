import React from 'react'
import {CProps} from '../types'
import './Button.scss'

export interface ButtonProps {
  onClick?: () => void
}

export function Button({onClick, children}: CProps<ButtonProps>) {
  return (
    <button className="button" onClick={onClick}>
      {children}
    </button>
  )
}
