import styled from 'styled-components';

export type Props = {
  $color: string;
  $size: string;
}

export const Heading = styled.h4<Props>`
  color: ${ props => props.$color };
  font-size: ${ props => props.$size };
  margin: 4px;
`;
