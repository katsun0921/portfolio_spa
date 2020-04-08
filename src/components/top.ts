import styled from 'styled-components'
import { VAR_MQ } from 'styles/_variables'

const TopBlock = `
  border: none;
  border-bottom: 1px solid rgba(255, 255, 255, 0.4);
  position: relative;
  transform: rotate(0deg);
  display: table;
  height: $height;
  left: $left;
  top: $top;
  transition: all 0.5s;
  width: $width;
  z-index: 99;
`

const TopNameBlock = {
  width: `63vw`,
  height: `78vw`,
  top: `-2vw`,
  left: `-7.8vw`,
  MQ: VAR_MQ.LG,
}

export const TopName = styled.section`
  ${TopBlock}
  width: 63vw;
  height: 78vw;
  top: -2vw;
  left: -7.8vw;
`
