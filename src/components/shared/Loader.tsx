import React from 'react';
import styled from 'styled-components';

type Props = {
  height: string;
  loading?: boolean;
  margin: string;
}

const NonLoading = styled.div<Props>`
  background: #37B3FB;
  margin: ${ props => props.margin };
  height: ${ props => props.height };
`;

const Loading = styled.div<Props>`
  margin: ${ props => props.margin };
  height: ${ props => props.height };
  animation-duration: 0.8s;
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

export const Loader = ({ margin, loading, height }: Props) =>
  loading
    ? <Loading margin={ margin } height={ height } />
    : <NonLoading margin={ margin } height={ height } />
