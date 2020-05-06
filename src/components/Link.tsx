import React, { ReactNode } from 'react'

import 'scss/object/component/_btn.scss'

type LinkDetail_Props = {
  children: ReactNode
  path: string
}
export const LinkDetail: React.FC<LinkDetail_Props> = ({ children, path }) => {
  return (
    <a className="c-btn c-btn--block" href={path}>
      {children}
    </a>
  )
}
