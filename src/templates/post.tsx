import React from 'react'

import PostLayout from '../components/postLayout'
import PostContext from '../contexts/post'

const Post = () => {
  const value: any = React.useContext(PostContext)
  return (
    <PostLayout>
      <h1
        dangerouslySetInnerHTML={{ __html: value.props.pageContext.node.title }}
      />
      <div
        dangerouslySetInnerHTML={{
          __html: value.props.pageContext.node.content,
        }}
      />
    </PostLayout>
  )
}

export default Post
