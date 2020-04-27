import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import PostLayout from './PostLayout'
import 'scss/object/project/_work.scss'

export default () => {
  const workClassName = 'p-work'
  const data = useStaticQuery(graphql`
    {
      allWordpressPost(
        sort: { fields: date, order: DESC }
        filter: { categories: { elemMatch: { name: { eq: "work" } } } }
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
      <h2 className="c-heading__blockMain">Work</h2>
      <section className={`${workClassName}__container`}>
        {data.allWordpressPost.edges.map((edge: any) => {
          const fullText = edge.node.content
          const omitText = fullText
            .replace(/<("[^"]*"|'[^']*'|[^'">])*>/g, '')
            .substring(0, 100)
          const remainText = fullText
            .replace(/<("[^"]*"|'[^']*'|[^'">])*>/g, '')
            .substring(100)
          if (remainText !== '') {
            edge.node.content =
              omitText +
              '...' +
              '<span style="color:red">' +
              'もっと読む' +
              '</span>'
          }
          return (
            <article key={edge.node.id} className={`${workClassName}__content`}>
              <a href={edge.node.path}>
                <h3
                  className={`${workClassName}__contentHeading`}
                  dangerouslySetInnerHTML={{ __html: edge.node.title }}
                />
                <div
                  className="js-omitText"
                  dangerouslySetInnerHTML={{ __html: edge.node.content }}
                />
              </a>
            </article>
          )
        })}
      </section>
    </PostLayout>
  )
}
