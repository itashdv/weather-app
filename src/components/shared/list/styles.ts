import styled from 'styled-components';

export const List = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
`;

export const ListItem = styled.li`
  cursor: pointer;
  margin: 6px 0;
  padding: 4px;
  width: 100%;
  &:hover {
    border: 1px solid #c3c3c3;
  }
  border-radius: 2px;
`;
