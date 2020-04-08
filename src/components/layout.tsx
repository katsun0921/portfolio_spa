/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { ReactNode } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import GlobalStyle from '../styles/layout'
import 'styles/scss/layout/_container.scss'
import bgImg from 'images/main.jpg'
import bgImgSp from 'images/main_sp.jpg'
import { VAR_MQ } from '../styles/variables'

const Main = styled.main`
  @media screen and (${VAR_MQ.MD}) {
    background: url(${bgImgSp});
    background-size: cover;
  }
  background: url(${bgImg});
  background-size: cover;
  height: 100vh;
  overflow: hidden;
  position: fixed;
  width: 100%;
  z-index: 0;
`
interface Prop {
  children: ReactNode
}

const Layout = ({ children }: Prop) => {
  return (
    <>
      <GlobalStyle />
      <Main>{children}</Main>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
