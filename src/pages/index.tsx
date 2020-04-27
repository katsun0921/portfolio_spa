import React from 'react'

import Layout from 'components/Layout'
import SEO from 'components/SEO'
import 'scss/layout/index.scss'
import 'scss/object/project/_top.scss'
import Content from '../components/Content'
import { TAB_TYPES } from '../actions/index'
import PostContext from '../contexts/PostContext'

interface IndexProps {}

interface showState {
  showContent: boolean
  tabType: string
  props: any
  post: boolean
}

class IndexPage extends React.Component<IndexProps, showState> {
  constructor(props: showState) {
    const post: boolean = props.pageContext.post
    super(props)
    this.state = {
      showContent: post ? post : false,
      tabType: post ? props.pageContext.node.categories[0].name : '',
      props: this.props,
      post: post ? post : false,
    }
    this.clickShowContent = this.clickShowContent.bind(this)
    this.clickShowPost = this.clickShowPost.bind(this)
  }
  clickShowContent(type: string) {
    this.setState({
      showContent: !this.state.showContent,
      tabType: type,
    })
  }
  clickShowPost() {
    this.setState({
      post: true ? false : true,
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
          <PostContext.Provider value={this.state}>
            <Content
              topTabType={this.state.tabType}
              clickShowContent={this.clickShowContent}
              clickShowPost={this.clickShowPost}
            />
          </PostContext.Provider>
        ) : null}
      </Layout>
    )
  }
}

export default IndexPage
