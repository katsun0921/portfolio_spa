import React, { Component, SFC, ReactElement, ReactNode } from 'react'

const TAB_TYPES = {
  WORK: 'work',
  BLOG: 'blog',
}

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
  onClick: any //(event: React.MouseEvent<HTMLInputElement>) => void
}
type Items_Props = {
  tabType: string
  children: ReactElement
  changeTab: any
}
const TabsNav = ({ currentTabType, tabData, onClick }: TabsComponent_Props) => (
  <ul className="tabs">
    {tabData.map((tab) => (
      <li
        className={currentTabType === tab.type ? 'active' : ''}
        onClick={() => onClick(tab.type)}
      >
        {tab.text}
      </li>
    ))}
  </ul>
)

class Items extends Component<{}, ReactNode> {
  static Work: SFC<Items_Props> = ({ tabType, children }) =>
    tabType === TAB_TYPES.WORK ? children : null
  static Blog: SFC<Items_Props> = ({ tabType, children }) =>
    tabType === TAB_TYPES.BLOG ? children : null
  static TabsNav: SFC<Items_Props> = ({ tabType, changeTab, ...props }) => (
    <TabsNav currentTabType={tabType} tabData={tabData} onClick={changeTab} />
  )

  state = {
    currentTabType: TAB_TYPES.WORK,
  }

  changeTab = (tabType: any) => {
    this.setState({ currentTabType: tabType })
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

const Content = () => (
  <Items>
    <Items.TabsNav />
    <Items.Work>work</Items.Work>
    <Items.Blog>blog</Items.Blog>
  </Items>
)

export default Content
