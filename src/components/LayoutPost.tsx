import React from 'react'

type Props = {
  children: React.ReactNode
}

const LayoutPost = ({ children }: Props) => (
  <article className="js-container l-container">
    <div className="l-content__block">{children}</div>
  </article>
)

export default LayoutPost
