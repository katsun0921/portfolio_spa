import React, { Component, FC, ReactElement } from 'react'

import { TAB_TYPES } from '../actions/index'

const tabData = [
  {
    text: 'Work_TAB',
    type: TAB_TYPES.WORK,
  },
  {
    text: 'Blog_TAB',
    type: TAB_TYPES.BLOG,
  },
]

interface TabsComponent_Props {
  currentTabType: string
  tabData: Array<{ text: string; type: string }>
  onClick: any // あとでmapのtab.typeエラーを調べる() => (event: React.MouseEvent<HTMLButtonElement>) => string
}

type Items_Props = {
  tabType: string
  children: ReactElement
  changeTab: string
}

const NavTabs = ({ currentTabType, tabData, onClick }: TabsComponent_Props) => (
  <ul className="tabs">
    {tabData.map((tab) => (
      <li
        key={tab.type}
        className={currentTabType === tab.type ? 'active' : ''}
        onClick={() => onClick(tab.type)}
      >
        {tab.text}
      </li>
    ))}
  </ul>
)

class Items extends Component {
  constructor(props: string) {
    super(props)
    this.state = {
      currentTabType: this.props.topTabType,
      navTabType: this.props.topTabType,
    }
  }
  static Work: FC<Items_Props> = ({ tabType, children }) =>
    tabType === TAB_TYPES.WORK ? children : null
  static Blog: FC<Items_Props> = ({ tabType, children }) =>
    tabType === TAB_TYPES.BLOG ? children : null
  static NavTabs: FC<Items_Props> = ({ tabType, changeTab, ...props }) => (
    <NavTabs currentTabType={tabType} tabData={tabData} onClick={changeTab} />
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

const Content = ({ topTabType }: any) => (
  <Items topTabType={topTabType}>
    <Items.NavTabs />
    <Items.Work>work</Items.Work>
    <Items.Blog>blog</Items.Blog>
  </Items>
)

export default Content
