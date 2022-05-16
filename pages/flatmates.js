import styled from 'styled-components';
import useStore from '../src/useStore';
import Nav from '../components/nav';
import CardContainer from '../components/CardContainer';
import FlatmateCard from '../components/FlatmateCard';

export default function FlatMates() {
  const flatmates = useStore(state => state.flatmates);

  return (
    <CardContainer>
      {flatmates.map(flatmate => (
        <FlatmateCard key={flatmate.id} flatmate={flatmate} />
      ))}
      <Nav></Nav>
    </CardContainer>
  );
}

const FlexboxRow = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`;

const FlexboxColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 15px;
`;
