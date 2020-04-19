import React from 'react'

type Props = {
  children: React.ReactNode
}

const PostLayout = ({ children }: Props) => (
  <article className="js-container l-container">
    <div className="l-content__block">{children}</div>
  </article>
)

export default PostLayout
