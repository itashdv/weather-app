import styled from 'styled-components';

export const Locations = styled.div`
  overflow-y: scroll;
  flex-grow: 1;
  &&::-webkit-scrollbar {
    width: 0.3em;
  }
  &&::-webkit-scrollbar-thumb {
    background-color: #206993;
    border-radius: 5px;
    outline: 1px solid rgb(27, 133, 239);
  }
`;
