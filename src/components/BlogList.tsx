import React from 'react'
import { gql } from 'apollo-boost'
import { useQuery } from '@apollo/react-hooks'
import { WrapRootElement } from '../apollo/WrapRootElement'
import { LinkDetail } from './Link'
import { ColSide } from './Col'
import LayoutPost from './LayoutPost'
import 'scss/object/project/_blog.scss'
import { CATEGORY_NAME } from '../actions/index'

export const QUERY_BLOGS = gql`
  query blogPosts(
    $first: Int
    $last: Int
    $before: String
    $after: String
    $categoryName: String
  ) {
    posts(
      where: { categoryName: $categoryName }
      first: $first
      before: $before
      after: $after
      last: $last
    ) {
      nodes {
        id
        title
        content
        uri
        date
      }
      pageInfo {
        endCursor
        startCursor
        hasNextPage
        hasPreviousPage
      }
    }
  }
`

const PER_PAGE = 3
const PAGINATION_VARIABLES = {
  first: PER_PAGE,
  last: null,
  before: null,
  after: null,
  categoryName: CATEGORY_NAME.BLOG,
}

const Posts = () => {
  const blogClassName = 'p-blog'

  // pagination
  const { first, last, before, after } = PAGINATION_VARIABLES
  const { loading, error, data, fetchMore } = useQuery(QUERY_BLOGS, {
    variables: {
      first: first,
      last: last,
      before: before,
      after: after,
      categoryName: CATEGORY_NAME.BLOG,
    },
    fetchPolicy: 'cache-and-network',
  })
  if (loading) return <p> Loading Posts...</p>
  if (error) return <p>Something wrong happened!</p>

  return (
    <section>
      {data.posts.nodes.map((node: any) => {
        // 100文字以上は・・・にする
        const fullText = node.content
        const omitText = fullText
          .replace(/<("[^"]*"|'[^']*'|[^'">])*>/g, '')
          .substring(0, 100)
        const remainText = fullText
          .replace(/<("[^"]*"|'[^']*'|[^'">])*>/g, '')
          .substring(100)
        if (remainText !== '') {
          node.content = omitText + '...'
        }
        // 日付をyyyy/mm/ddにする
        const postDay = new Date(`${node.date}+09:00`)
        const year = postDay.getFullYear()
        const month = postDay.getMonth() + 1
        const day = postDay.getDate()

        return (
          <article key={node.id} className={`${blogClassName}__post`}>
            <h3 className={`${blogClassName}__postTitle`}>{node.title}</h3>
            <p className={`${blogClassName}__postInfo`}>
              <time>
                {year}/{month}/{day}
              </time>
              {/*edge.node.tags ? <span>{edge.node.tags.name}</span> : ''*/}
            </p>
            <div
              className={`${blogClassName}__postBody`}
              dangerouslySetInnerHTML={{ __html: node.content }}
            />
            <ColSide>
              <LinkDetail path={node.uri}>READ MORE</LinkDetail>
            </ColSide>
          </article>
        )
      })}
      {data.posts.pageInfo.hasPreviousPage === true ? (
        <button
          onClick={() => {
            fetchMore({
              variables: {
                first: null,
                last: PER_PAGE,
                after: null,
                before: data.posts.pageInfo.startCursor,
              },
              updateQuery: (previousResult, { fetchMoreResult }) => {
                const newNodes = fetchMoreResult.posts.nodes
                const newPageInfo = fetchMoreResult.posts.pageInfo
                return {
                  posts: {
                    __typename: previousResult.posts.__typename,
                    nodes: newNodes,
                    pageInfo: newPageInfo,
                  },
                }
              },
            })
          }}
        >
          Prev
        </button>
      ) : null}
      {data.posts.pageInfo.hasNextPage === true ? (
        <button
          onClick={() => {
            fetchMore({
              variables: {
                first: PER_PAGE,
                last: null,
                after: data.posts.pageInfo.endCursor,
                before: null,
              },
              updateQuery: (previousResult, { fetchMoreResult }) => {
                const newNodes = fetchMoreResult.posts.nodes
                const newPageInfo = fetchMoreResult.posts.pageInfo
                return {
                  posts: {
                    __typename: previousResult.posts.__typename,
                    nodes: newNodes,
                    pageInfo: newPageInfo,
                  },
                }
              },
            })
          }}
        >
          NEXT
        </button>
      ) : null}
    </section>
  )
}

const BlogList = () => {
  return (
    <LayoutPost>
      <WrapRootElement client={client}>
        <h2 className="c-heading__blockMain">{CATEGORY_NAME.BLOG}</h2>
        <Posts />
      </WrapRootElement>
    </LayoutPost>
  )
}

export default BlogList
