import styled from 'styled-components';

export type Props = {
  $color: string;
  $size: string;
}

export const LinkButton = styled.button<Props>`
  background: none!important;
  border: none;
  color: ${ props => props.$color };
  cursor: pointer;
  font-size: ${ props => props.$size };
  margin: 0!important;
  padding: 4px;
  text-decoration: underline;
`;
