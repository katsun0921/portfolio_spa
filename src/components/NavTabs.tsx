import React from 'react'
import styled from 'styled-components'

import ContentContext from '../contexts/ContentContext'
import { MenuButton } from './Button'

interface TabsComponent_Props {
  currentTabType: string
  tabData: Array<{ text: string; type: string }>
  changeTab: any
}

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
      background-color: #333;
    }
    &.l-menu__listStatus {
      &:hover .l-menuInline__list,
      &:focus .l-menuInline__list {
        color: #fff;
        background-color: #333;
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

export default NavTabs
