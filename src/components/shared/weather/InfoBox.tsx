import React from 'react';
import styled from 'styled-components';

const StyledInfoBox = styled.div`
  text-align: left;
  width: 50%;
`;

type Props = { children: React.ReactNode; }

export const InfoBox = ({ children }: Props) =>
  <StyledInfoBox>{ children }</StyledInfoBox>;
