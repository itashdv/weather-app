import styled from 'styled-components';

export const Combobox = styled.div`
  margin: 6px;
  position: relative;
`;

export const Input = styled.input`
  padding: 4px;
  width: 100%;
`;

export const Popup = styled.div`
  background: #fff;
  border-radius: 4px;
  margin-top: 6px;
  position: absolute;
  width: 100%;
`;

export const ListBox = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
`;

export const ListItem = styled.li`
  cursor: pointer;
  margin: 6px 0;
  padding: 4px;
  width: 100%;
  &:first-child {
    margin-top: 0;
  }
  &:last-child {
    margin-bottom: 0;
  }
  &:hover {
    border: 1px solid #c3c3c3;
  }
  border-radius: 2px;
`;
