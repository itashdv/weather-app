import styled from 'styled-components';

export const App = styled.div`
  margin-left: auto;
  margin-right: auto;
  width: 380px;
  padding: 6px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  position: relative;
  &&:after {
    content: '';
    position: absolute;
    z-index: 1;
    bottom: 0;
    left: 0;
    pointer-events: none;
    background-image : linear-gradient(to bottom, 
      rgba(21,105,147, 0), 
      rgba(21,105,147, 1) 90%);
    width: 100%;
    height: 4em;
  }
  @media only screen and (max-width: 400px) {
    width: 100%;
  }
`;
