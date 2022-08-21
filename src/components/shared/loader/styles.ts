import styled from 'styled-components';

export type Props = {
  $borderRadius?: string;
  $height: string;
  $margin: string;
}

export const LoadingFalse = styled.div<Props>`
  background: #37B3FB;
  border-radius: ${ props => props.$borderRadius };
  height: ${ props => props.$height };
  margin: ${ props => props.$margin };
`;

export const LoadingTrue = styled.div<Props>`
  border-radius: ${ props => props.$borderRadius };
  height: ${ props => props.$height };
  margin: ${ props => props.$margin };
  animation-duration: 0.5s;
  animation-fill-mode: forwards;
  animation-iteration-count: infinite;
  animation-name: placeHolderShimmer;
  animation-timing-function: linear;
  background: #37B3FB;
  background: linear-gradient(to right, #a0d9fa 8%, #4fbaf7 38%, #a0d9fa 54%);
  background-size: 1000px 640px;
  @keyframes placeHolderShimmer{
    0%{
      background-position: -468px 0
    }
    100%{
      background-position: 468px 0
    }
  }
`;
