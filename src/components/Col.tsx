import React from 'react'
import styled from 'styled-components'

const ColSideStyle = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`

export const ColSide: React.FC = ({ children }) => {
  return <ColSideStyle>{children}</ColSideStyle>
}
