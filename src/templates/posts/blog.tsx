import React from 'react'

import { useStaticQuery, graphql } from 'gatsby'
import 'scss/object/project/_blog.scss'

const PostBlog = () => {
  const data = useStaticQuery(graphql`
    {
      allWordpressPost(
        sort: { fields: date, order: DESC }
        filter: { categories: { elemMatch: { name: { eq: "blog" } } } }
      ) {
        edges {
          node {
            title
            content
            date(formatString: "YYYY/MM/DD")
            path
            tags {
              name
            }
            wordpress_id
          }
        }
      }
    }
  `)
  return (
    <article className="js-container l-container" id="blog">
      <pre>{JSON.stringify(data, null, 4)}</pre>
      <div className="l-content__block">
        <h2 className="c-heading__blockMain">Blog</h2>
        <article id="blog-" className="p-blog__post">
          <h3 className="p-blog__postTitle"></h3>
          <p className="p-blog__postInfo">
            <time></time>
            <span></span>
          </p>
          <div className="p-blog__postBody"></div>
          <a href="" className="c-btn c-btn--block">
            READ MORE
          </a>
        </article>
      </div>
    </article>
  )
}

export default PostBlog
