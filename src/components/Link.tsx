import React, { ReactNode } from 'react'

import 'scss/object/component/_btn.scss'

type LinkDetail_Props = {
  children: ReactNode
  path?: string
  href?: string
}
export const LinkDetail: React.FC<LinkDetail_Props> = ({ children, path }) => {
  return (
    <a className="c-btn c-btn--block" href={path}>
      {children}
    </a>
  )
}
export const LinkModal: React.FC<LinkDetail_Props> = ({ children, href }) => {
  return (
    <a
      className="c-btn c-btn--block"
      href={href}
      target="_blank"
      rel="noopener"
    >
      {children}
    </a>
  )
}
