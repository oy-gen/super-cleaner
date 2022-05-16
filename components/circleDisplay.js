import styled, { css } from 'styled-components';
import React, { useState } from 'react';

export default function CircleDisplay() {
  const [value, setValue] = useState(false);
  return <StyledDisplay status={value}></StyledDisplay>;
}

const StyledDisplay = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  outline: 1px solid black;
  background: red;
  transition: background 0.5s;

  ${({ status = false }) => {
    return css`
      background: ${status ? 'green' : 'red'};
    `;
  }}
`;
