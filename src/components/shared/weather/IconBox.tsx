import React from 'react';
import styled from 'styled-components';

const StyledIconBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  text-align: left;
  width: 50%;
`;

type Props = { children: React.ReactNode; }

export const IconBox = ({ children }: Props) =>
  <StyledIconBox>{ children }</StyledIconBox>;
