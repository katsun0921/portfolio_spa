import React from 'react'
import { Link } from 'gatsby'

import Layout from 'components/layout'
import SEO from 'components/seo'

const IndexPage = () => (
  <Layout>
    <SEO />
    <p className="l-content__ieError" id="ieError"></p>
    <div className="l-container__background--overlay">
      <div className="l-container">
        <section className="js-topName p-top__name">
          <div className="js-topName p-top__nameContainer">
            <h1 className="p-top__headingMain">
              Katsumasa
              <br />
              Sato<span className="p-top__headingMain--sub">WEB DEVELOPER</span>
            </h1>
            <a
              className="p-top__nameSkillLink"
              href="https://drive.google.com/open?id=1pWnjGrUb1viZDfJ0AbazUe1gE14RgJuNk8UmCin2Xk4"
              target="_blank"
              rel="noopener"
            >
              SKILL SHEET
            </a>
            <a
              className="p-top__nameSkillLink"
              href="https://m.wantedly.com/invitations?code=04087b0c3a0f696e76697465725f6964690491d512053a0f6368616e6e656c5f6964303a0f636f6d70616e795f6964303a0c7465616d5f6964303a117461726765745f656d61696c303a0c636f756e74657269003a07697669070262c35a11b955769e8e7c52dfeeb695dbb0b367"
              target="_blank"
              rel="noopener"
            >
              DIRECT MESSAGE(Wantedly Chat)
            </a>
          </div>
        </section>
        <nav className="l-menu__blocks" id="js-topMenu">
          <button className="js-btnResume js-topBtn p-top__resumeBlock l-menu__block">
            <span className="p-top__resumeContainer">
              <span className="l-menuResume l-menu__subHeading l-menu--resume">
                Resume
              </span>
            </span>
          </button>
          <button className="js-btnWork js-topBtn p-top__workBlock l-menu__block">
            <span className="p-top__workContainer">
              <span className="l-menuWork l-menu__subHeading l-menu--work">
                Work
              </span>
            </span>
          </button>
          <button className="js-btnBlog js-topBtn p-top__blogBlock l-menu__block">
            <span className="p-top__blogContainer">
              <span className="l-menuBlog l-menu__subHeading l-menu--blog">
                Blog
              </span>
            </span>
          </button>
        </nav>
      </div>
    </div>
  </Layout>
)

export default IndexPage
