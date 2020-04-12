import React, {
  Component,
  FC,
  ReactElement,
  createContext,
  useContext,
} from 'react'

import { TAB_TYPES } from '../actions/index'

const Context = createContext('')

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
  children: ReactElement
  changeTab: string
}

const MenuButton: FC = ({ children, onClick }) => (
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
  const clickShowContent = useContext(Context)
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

const Content = ({ clickShowContent, topTabType }: any) => (
  <Context.Provider value={clickShowContent}>
    <div className="l-content__blocks">
      <Items topTabType={topTabType}>
        <Items.NavTabs />
        <Items.Work>work</Items.Work>
        <Items.Blog>blog</Items.Blog>
      </Items>
    </div>
  </Context.Provider>
)

export default Content
