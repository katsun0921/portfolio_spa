import React from 'react'

import 'scss/object/component/_btn.scss'

export const LinkDetail = ({ children, path }) => {
  return (
    <a className="c-btn c-btn--block" href={path}>
      {children}
    </a>
  )
}
