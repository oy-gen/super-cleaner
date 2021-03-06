import styled, { css } from 'styled-components';
import React, { useState } from 'react';

export default function CircleButton() {
  const [value, setValue] = useState(false);
  return (
    <StyledButton
      status={value}
      type="button"
      onClick={() => {
        setValue(!value);
      }}
    ></StyledButton>
  );
}

const StyledButton = styled.button`
  width: 38px;
  height: 38px;
  border-radius: 50%;
  outline: 2px solid black;
  background: red;
  transition: background 0.5s;

  ${({ status = false }) => {
    return css`
      background: ${status ? 'green' : 'red'};
    `;
  }}
`;
