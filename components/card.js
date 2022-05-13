import styled from 'styled-components';

export default function Card({ children }) {
  return <StyledCard>{children}</StyledCard>;
}

const StyledCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: darkgrey;
  padding: 3rem;
  margin: 3rem;
  gap: 3rem;
  border-radius: 20px;
`;
