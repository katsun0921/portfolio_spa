import React from 'react'

import LayoutPost from '../components/LayoutPost'
import PostContext from '../contexts/PostContext'
import { ColSide } from '../components/Col'
import { PrimaryButton } from '../components/Button'

const Post = ({ clickShowPost }) => {
  const value: any = React.useContext(PostContext)
  return (
    <LayoutPost>
      <h1
        dangerouslySetInnerHTML={{ __html: value.props.pageContext.node.title }}
      />
      <section
        dangerouslySetInnerHTML={{
          __html: value.props.pageContext.node.content,
        }}
      />
      <ColSide>
        <PrimaryButton onClick={() => clickShowPost()}>
          {value.tabType}一覧に戻る
        </PrimaryButton>
      </ColSide>
    </LayoutPost>
  )
}

export default Post
