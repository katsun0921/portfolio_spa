import React from 'react'
import { Link } from 'gatsby'

import Layout from 'components/layout'
import SEO from 'components/seo'
import 'styles/scss/object/project/_top.scss'
import 'styles/scss/layout/_container.scss'
import 'styles/scss/layout/_menu.scss'

const IndexPage = () => (
  <Layout>
    <SEO />
    {/* <p className="l-content__ieError" id="ieError"></p> */}
    <div className="l-container__background--overlay"></div>
    <div className="l-container">
      <section className="js-topName p-top__name">
        <div className="js-topName p-top__nameContainer">
          <h1 className="p-top__headingMain">
            Katsumasa
            <span className="p-top__headingMainUnder">Sato</span>
            <span className="p-top__headingMain--sub">WEB DEVELOPER</span>
          </h1>
          <a
            className="p-top__nameSkillLink"
            href="https://drive.google.com/open?id=1pWnjGrUb1viZDfJ0AbazUe1gE14RgJuNk8UmCin2Xk4"
            target="_blank"
            rel="noopener"
          >
            SKILL SHEET
          </a>
        </div>
      </section>
      <nav className="l-menu__blocks" id="js-topMenu">
        <button className="js-btnResume js-topBtn p-top__resumeBlock l-menu__block">
          <div className="p-top__resumeContainer">
            <div className="l-menuResume l-menu__subHeading l-menu--resume">
              Resume
            </div>
          </div>
        </button>
        <button className="js-btnWork js-topBtn p-top__workBlock l-menu__block">
          <div className="p-top__workContainer">
            <div className="l-menuWork l-menu__subHeading l-menu--work">
              Work
            </div>
          </div>
        </button>
        <button className="js-btnBlog js-topBtn p-top__blogBlock l-menu__block">
          <div className="p-top__blogContainer">
            <div className="l-menuBlog l-menu__subHeading l-menu--blog">
              Blog
            </div>
          </div>
        </button>
      </nav>
    </div>
  </Layout>
)

export default IndexPage
