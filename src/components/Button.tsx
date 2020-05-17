import React from 'react'

import 'scss/object/component/_btn.scss'

export const PrimaryButton: React.FC = ({ children, onClick }) => {
  return (
    <button className="c-btn c-btn--block" onClick={onClick}>
      {children}
    </button>
  )
}

export const MenuButton: React.FC = ({ children, onClick }) => (
  <button type="button" className="l-menuInline__list" onClick={onClick}>
    {children}
  </button>
)
