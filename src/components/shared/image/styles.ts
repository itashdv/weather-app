import styled from 'styled-components';

export type Props = {
  $height: string;
  $width: string;
}

export const Image = styled.img<Props>`
  height: ${ props => props.$height };
  width: ${ props => props.$width };
  margin: 8px;
`;