import React from 'react'

import Post from './Post'
import { TAB_TYPES } from '../actions/index'
import PostContext from '../contexts/PostContext'
import WorkList from './WorkList'
import BlogList from './BlogList'
import styled from 'styled-components'

const ContentContext = React.createContext('')

const tabData = [
  {
    text: 'Work',
    type: TAB_TYPES.WORK,
  },
  {
    text: 'Blog',
    type: TAB_TYPES.BLOG,
  },
]

interface TabsComponent_Props {
  currentTabType: string
  tabData: Array<{ text: string; type: string }>
  changeTab: any
}

type Items_Props = {
  tabType: string
  children: React.ReactElement
  changeTab: string
}

const MenuButton: React.FC = ({ children, onClick }) => (
  <button type="button" className="l-menuInline__list" onClick={onClick}>
    {children}
  </button>
)

const NavTabs = ({
  currentTabType,
  tabData,
  changeTab,
}: TabsComponent_Props) => {
  const clickShow = React.useContext(ContentContext)
  const List = styled.li`
    position: relative;
    + .is-active .l-menuInline__list {
      color: #fff;
      background-color: #666;
    }
    &.l-menu__listStatus {
      &:hover .l-menuInline__list,
      &:focus .l-menuInline__list {
        color: #fff;
        background-color: #666;
        padding-left: 26px;
        &::before {
          background: #4dd133;
          border-radius: 50%;
          content: '';
          width: 7px;
          height: 7px;
          left: 9px;
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
        }
        &::after {
          background: #4dd133;
          border-radius: 50%;
          content: '';
          width: 15px;
          height: 15px;
          left: 5px;
          opacity: 0.3;
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
        }
      }
    }
  `
  return (
    <nav className="l-menu__container">
      <ul className="l-menuInline">
        <List className={`l-menu__listStatus`}>
          <MenuButton onClick={() => alert('modal')}>Resume</MenuButton>
        </List>
        {tabData.map((tab) => (
          <List
            key={tab.type}
            className={
              currentTabType === tab.type
                ? 'l-menu__listStatus is-active'
                : 'l-menu__listStatus'
            }
          >
            <MenuButton onClick={() => changeTab(tab.type)}>
              {tab.text}
            </MenuButton>
          </List>
        ))}
        <List>
          <MenuButton
            onClick={() => {
              clickShow.clickShowContent(currentTabType)
              clickShow.clickShowPost()
            }}
          >
            <span className="fas fa-times" aria-hidden="true"></span>
          </MenuButton>
        </List>
      </ul>
    </nav>
  )
}

class Items extends React.Component {
  constructor(props: string) {
    super(props)
    this.state = {
      currentTabType: this.props.topTabType,
      navTabType: this.props.topTabType,
    }
  }
  static Work: React.FC<Items_Props> = ({ tabType, children }) =>
    tabType === TAB_TYPES.WORK ? children : null
  static Blog: React.FC<Items_Props> = ({ tabType, children }) =>
    tabType === TAB_TYPES.BLOG ? children : null
  static NavTabs: React.FC<Items_Props> = ({ tabType, changeTab }) => (
    <NavTabs currentTabType={tabType} tabData={tabData} changeTab={changeTab} />
  )

  componentDidUpdate(prevProps: any) {
    if (this.props.topTabType !== prevProps.topTabType) {
      this.changeTab(this.props.topTabType)
    }
  }

  changeTab = (tabType: string) => {
    this.setState({
      currentTabType: tabType,
    })
    this.props.clickShowPost()
  }
  render() {
    return React.Children.map(this.props.children, (child) =>
      React.cloneElement(child as React.ReactElement, {
        tabType: this.state.currentTabType,
        changeTab: this.changeTab,
      })
    )
  }
}

const Content = ({ clickShowContent, topTabType, clickShowPost }: any) => {
  const postValue: any = React.useContext(PostContext)
  return (
    <ContentContext.Provider
      value={{
        clickShowContent: clickShowContent,
        clickShowPost: clickShowPost,
      }}
    >
      <div className="l-content__blocks">
        <Items
          topTabType={topTabType}
          clickShowContent={clickShowContent}
          clickShowPost={clickShowPost}
        >
          <Items.NavTabs />
          <Items.Work>
            {postValue.post ? (
              <Post clickShowPost={clickShowPost} />
            ) : (
              <WorkList />
            )}
          </Items.Work>
          <Items.Blog>
            {postValue.post ? (
              <Post clickShowPost={clickShowPost} />
            ) : (
              <BlogList />
            )}
          </Items.Blog>
        </Items>
      </div>
    </ContentContext.Provider>
  )
}

export default Content
