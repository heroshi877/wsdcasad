import styled from '@emotion/styled/macro'
import mq from 'mediaQuery'

const TopBar = styled('div')`
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #ededed;
  box-shadow: 0 2px 4px 0 rgba(181, 177, 177, 0.2);

  background: #323232;

  ${mq.small`
    padding: 20px 40px;
  `}
`

export default TopBar
