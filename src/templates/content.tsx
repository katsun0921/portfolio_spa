import React from 'react'

import Post from './post'
import { TAB_TYPES } from '../actions/index'
import PostContext from '../contexts/post'
import WorkList from './WorkList'
import BlogList from './BlogList'

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
  changeTab: any // あとでmapのtab.typeエラーを調べる() => (event: React.MouseEvent<HTMLButtonElement>) => string
}

type Items_Props = {
  tabType: string
  children: React.ReactElement
  changeTab: string
}

const MenuButton: React.FC = ({ children, onClick }) => (
  <button
    type="button"
    className="l-menuInline__list"
    onClick={() =>
      onClick({
        showContent: false,
      })
    }
  >
    {children}
  </button>
)

const NavTabs = ({
  currentTabType,
  tabData,
  changeTab,
}: TabsComponent_Props) => {
  const clickShowContent = React.useContext(ContentContext)
  const postValue: any = React.useContext(PostContext)
  return (
    <nav className="l-menu__container">
      <ul className="l-menuInline">
        <li>
          <MenuButton>Resume</MenuButton>
        </li>
        {tabData.map((tab) => (
          <li
            key={tab.type}
            className={currentTabType === tab.type ? 'active' : ''}
          >
            <MenuButton onClick={() => changeTab(tab.type)}>
              {tab.text}
            </MenuButton>
          </li>
        ))}
        <li>
          <MenuButton onClick={clickShowContent}>
            <span className="fas fa-times" aria-hidden="true"></span>
          </MenuButton>
        </li>
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
      post: this.props.post,
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

  changeTab = (tabType: string, post: boolean) => {
    this.setState({
      currentTabType: tabType,
      post: !post,
    })
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

const Content = ({ clickShowContent, topTabType }: any) => {
  const postValue: any = React.useContext(PostContext)
  return (
    <ContentContext.Provider value={clickShowContent}>
      <div className="l-content__blocks">
        <Items topTabType={topTabType}>
          <Items.NavTabs />
          <Items.Work>{postValue.post ? <Post /> : <WorkList />}</Items.Work>
          <Items.Blog>{postValue.post ? <Post /> : <BlogList />}</Items.Blog>
        </Items>
      </div>
    </ContentContext.Provider>
  )
}

export default Content
