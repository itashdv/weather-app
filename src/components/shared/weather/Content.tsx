import React from 'react';
import styled from 'styled-components';

const StyledContent = styled.div`
  display: flex;
  margin-bottom: 10px;
  width: 100%;
`;

type Props = { children: React.ReactNode; }

export const Content = ({ children }: Props) =>
  <StyledContent>{ children }</StyledContent>;
