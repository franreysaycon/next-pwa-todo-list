import styled, { useTheme } from 'styled-components'
import ClearButton from './ClearButton'
import { CheckSquare } from 'react-feather'

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  padding: ${({ theme }) => theme.spaces[1]};
`

const TextContainer = styled.div`
  display: flex;
  flex: 1;
  margin-right: ${({ theme }) => theme.spaces[0]};
`

const Card = ({ text, onClick }) => {
    const theme = useTheme()
    return (
        <Container>
            <TextContainer>{text}</TextContainer>
            <ClearButton onClick={onClick}><CheckSquare color={theme.buttonColor.secondary} /></ClearButton>
        </Container>
    )
}

export default Card
