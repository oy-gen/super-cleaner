import styled from 'styled-components';
import Card from '../components/card';
import useStore from '../src/useStore';
import Avatar from '@mui/material/Avatar';
import Nav from '../components/nav';
import CardContainer from '../components/CardContainer';
import FlatmateCard from '../components/FlatmateCard';

export default function FlatMates() {
  const rooms = useStore(state => state.rooms);
  const flatmates = useStore(state => state.flatmates);
  const filterAssignedRooms = useStore(state => state.filterAssignedRooms);

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
