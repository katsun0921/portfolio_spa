import React from 'react'

import Post from '../templates/Post'
import PostContext from '../contexts/PostContext'
import WorkList from './WorkList'
import BlogList from './BlogList'
import Items from './Items'
import ContentContext from '../contexts/ContentContext'

const Content = ({ clickShowContent, topTabType, clickShowPost }: any) => {
  const postValue: any = React.useContext(PostContext)
  return (
    <ContentContext.Provider
      value={{
        clickShowContent: clickShowContent,
        clickShowPost: clickShowPost,
      }}
    >
      <div className="l-content__blocks">
        <Items
          topTabType={topTabType}
          clickShowContent={clickShowContent}
          clickShowPost={clickShowPost}
        >
          <Items.NavTabs />
          <Items.Work>
            {postValue.post ? (
              <Post clickShowPost={clickShowPost} />
            ) : (
              <WorkList />
            )}
          </Items.Work>
          <Items.Blog>
            {postValue.post ? (
              <Post clickShowPost={clickShowPost} />
            ) : (
              <BlogList />
            )}
          </Items.Blog>
        </Items>
      </div>
    </ContentContext.Provider>
  )
}

export default Content
