import React from 'react'

import { TAB_TYPES } from '../actions/index'
import NavTabs from './NavTabs'

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

type Items_Props = {
  tabType: string
  children: React.ReactElement
  changeTab: string
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

export default Items
