import React from 'react'

import 'scss/object/component/_btn.scss'

export const PrimaryButton = ({ children, onClick }) => {
  return (
    <button className="c-btn c-btn--block" onClick={onClick}>
      {children}
    </button>
  )
}
