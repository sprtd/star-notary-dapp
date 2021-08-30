import styled, { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Nunito', sans-serif;
  }
`
  
const RootInterface = styled.div`
  width: 100%;
  height: 100%;
`

export { GlobalStyle, RootInterface }