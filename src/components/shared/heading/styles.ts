import styled from 'styled-components';

export type Props = {
  $color: string;
  $size: string;
  $align?: string;
}

export const Heading = styled.h4<Props>`
  color: ${ props => props.$color };
  font-size: ${ props => props.$size };
  text-align: ${ props => props.$align };
  margin: 4px;
`;
