import React from 'react'
import Content from '../templates/content'

export default ({ pageContext }: any) => (
  <Content>
    {console.log(pageContext)}
    <h1 dangerouslySetInnerHTML={{ __html: pageContext.node.title }} />
    <div dangerouslySetInnerHTML={{ __html: pageContext.node.content }} />
  </Content>
)
