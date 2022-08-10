import styled from 'styled-components';

export type Props = {
  $align: string;
  $color: string;
  $size: string;
}

export const Text = styled.p<Props>`
  color: ${ props => props.$color };
  font-size: ${ props => props.$size };
  margin: 4px;
  text-align: ${ props => props.$align }
`;
