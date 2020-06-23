import {CSSProperties, PropsWithChildren} from 'react'

export type CProps<P> = PropsWithChildren<P> &
  Partial<{
    style: CSSProperties
    className: string
  }>
