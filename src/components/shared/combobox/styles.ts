import styled from 'styled-components';

type PopupProps = {
  $visibility: boolean;
}

export const Combobox = styled.div`
  margin: 6px;
  position: relative;
`;

export const Input = styled.input`
  padding: 4px;
  width: 100%;
`;

export const ListBox = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
`;

export const ListItem = styled.li`
  color: #206993;
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

export const Popup = styled.div<PopupProps>`
  background: #fff;
  border: 1px solid #206993;
  box-shadow: 5px 10px rgba(68, 68, 68, 0.6);
  border-radius: 4px;
  display: ${ props => props.$visibility ? 'block' : 'none' };
  margin-top: 6px;
  position: absolute;
  width: 100%;
`;
