import styled from "styled-components";

const ContentWrapper = styled.main`
  display: flex;
  flex-direction: column;
  height: 60vh;
  border-radius: 5px;
  width: 60vw;
  justify-content: center;
  align-items:center;
  background: rgba(46, 49, 49, 0.2);

`


const DappContentWrapper = styled.div`
  width: 60vw;
  // padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h4 {
    color: #555;
    margin-bottom: 20px;
  }

  p {
    color: #555;
  }
  span {
    height: 3px;
    width: 50%;
    background: #eee;
    border-radius: 10px;
    margin-bottom: 50px;
    
  }
  button {
    margin-bottom: 5px;
    border-radius: 3px;
    width: 150px;
    padding: 3px 20px;
    cursor: pointer;
  }

`

const Span = styled.span`
  height: 3px;
  width: 50%;
  background: #eee;
  border-radius: 10px;
    
  button {
    margin-bottom: 20px;
    width: 150px;
    padding: 10px 20px;
  }
  
`


export { ContentWrapper, DappContentWrapper, Span }