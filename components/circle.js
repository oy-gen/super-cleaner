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
