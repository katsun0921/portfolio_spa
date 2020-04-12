import React, { Component } from 'react'

import Layout from 'components/layout'
import SEO from 'components/seo'
import 'scss/layout/index.scss'
import 'scss/object/project/_top.scss'
import Content from '../templates/content'
import { TAB_TYPES } from '../actions/index'

interface IndexProps {}

interface showState {
  showContent: boolean
  tabType: string
}

class IndexPage extends Component<IndexProps, showState> {
  constructor(props: showState) {
    super(props)
    this.state = {
      showContent: false,
      tabType: '',
    }
  }
  clickShowContent(type: string) {
    this.setState({
      showContent: true,
      tabType: type,
    })
  }

  render() {
    const topClassName = 'p-top'
    const menuClassName = 'l-menu'
    return (
      <Layout>
        <SEO />
        {/* <p className="l-content__ieError" id="ieError"></p> */}
        <div className="l-container">
          <section
            className={
              this.state.showContent
                ? `js-topName ${topClassName}__name is-rotation`
                : `${topClassName}__name`
            }
          >
            <div
              className={
                this.state.showContent
                  ? `js-topName ${topClassName}__nameContainer is-rotation`
                  : `js-topName ${topClassName}__nameContainer`
              }
            >
              <h1 className={`${topClassName}__headingMain`}>
                Katsumasa
                <span className={`${topClassName}__headingMainUnder`}>
                  Sato
                </span>
                <span className={`${topClassName}__headingMain--sub`}>
                  WEB DEVELOPER
                </span>
              </h1>
              <a
                className={`${topClassName}__nameSkillLink`}
                href="https://drive.google.com/open?id=1pWnjGrUb1viZDfJ0AbazUe1gE14RgJuNk8UmCin2Xk4"
                target="_blank"
                rel="noopener"
              >
                SKILL SHEET
              </a>
            </div>
          </section>
          <nav className={`${menuClassName}__blocks`} id="js-topMenu">
            <button
              className={`js-btnResume js-topBtn ${topClassName}__resumeBlock ${menuClassName}__block`}
            >
              <div className={`${topClassName}__resumeContainer`}>
                <div
                  className={`${menuClassName}Resume ${menuClassName}__subHeading ${menuClassName}--resume`}
                >
                  Resume
                </div>
              </div>
            </button>
            <button
              onClick={() => this.clickShowContent(TAB_TYPES.WORK)}
              className={`js-topBtn ${topClassName}__workBlock ${menuClassName}__block`}
            >
              <div className={`${topClassName}__workContainer`}>
                <div
                  className={`${menuClassName}Work ${menuClassName}__subHeading ${menuClassName}--work`}
                >
                  Work
                </div>
              </div>
            </button>
            <button
              onClick={() => this.clickShowContent(TAB_TYPES.BLOG)}
              className={`js-btnBlog js-topBtn ${topClassName}__blogBlock ${menuClassName}__block`}
            >
              <div className={`${topClassName}__blogContainer`}>
                <div
                  className={`${menuClassName}Blog ${menuClassName}__subHeading ${menuClassName}--blog`}
                >
                  Blog
                </div>
              </div>
            </button>
          </nav>
        </div>
        {this.state.showContent ? (
          <Content topTabType={this.state.tabType} />
        ) : null}
      </Layout>
    )
  }
}

export default IndexPage
