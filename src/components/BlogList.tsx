import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import { LinkDetail } from './Link'
import { ColSide } from './Col'
import PostLayout from './PostLayout'
import 'scss/object/project/_blog.scss'

const BlogList = () => {
  const blogClassName = 'p-blog'
  const data = useStaticQuery(graphql`
    {
      allWordpressPost(
        sort: { fields: date, order: DESC }
        filter: { categories: { elemMatch: { name: { eq: "blog" } } } }
      ) {
        edges {
          node {
            id
            title
            content
            date(formatString: "YYYY/MM/DD")
            path
            tags {
              name
            }
          }
        }
      }
    }
  `)
  return (
    <PostLayout>
      <h2 className="c-heading__blockMain">Blog</h2>
      {data.allWordpressPost.edges.map((edge: any) => {
        const fullText = edge.node.content
        const omitText = fullText
          .replace(/<("[^"]*"|'[^']*'|[^'">])*>/g, '')
          .substring(0, 100)
        const remainText = fullText
          .replace(/<("[^"]*"|'[^']*'|[^'">])*>/g, '')
          .substring(100)
        if (remainText !== '') {
          edge.node.content = omitText + '...'
        }
        return (
          <article key={edge.node.id} className={`${blogClassName}__post`}>
            <h3 className={`${blogClassName}__postTitle`}>{edge.node.title}</h3>
            <p className={`${blogClassName}__postInfo`}>
              <time>{edge.node.date}</time>
              {/*edge.node.tags ? <span>{edge.node.tags.name}</span> : ''*/}
            </p>
            <div
              className={`${blogClassName}__postBody`}
              dangerouslySetInnerHTML={{ __html: edge.node.content }}
            />
            <ColSide>
              <LinkDetail path={edge.node.path}>READ MORE</LinkDetail>
            </ColSide>
          </article>
        )
      })}
    </PostLayout>
  )
}

export default BlogList