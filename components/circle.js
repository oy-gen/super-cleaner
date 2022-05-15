import styled from 'styled-components';

export default function Circle() {
  return <StyledCircle></StyledCircle>;
}

const StyledCircle = styled.div`
  width: 38px;
  height: 38px;
  border-radius: 50%;
  background-color: red;
  outline: 2px solid black;
`;



// import styled, { css } from "styled-components";

// const StyledDiv = styled.div`
//   height: 50px;
//   background: pink;
//   transition: width 0.5s, background 0.5s;

//   ${({ bool = false }) => {
//     return css`
//       width: ${bool ? "150px" : "100px"};
//       background: ${bool ? "lightblue" : "pink"};
//     `;
//   }}
// `;