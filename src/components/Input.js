import styled from 'styled-components'

const Input = styled.input`
  width: 100%;
  border: none;
  font-size: ${({ theme }) => theme.fontSizes[0]};
  border-radius: 10px;
  outline: none;
  padding: ${({ theme }) => theme.spaces[0]};
  font-family: inherit;
`

export default Input
