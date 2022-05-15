import styled from 'styled-components';
import Card from '../components/card';
import useStore from '../src/useStore';
import Nav from '../components/nav';
import CardContainer from '../components/CardContainer';
import Avatar from '@mui/material/Avatar';
import Circle from '../components/circle';
import Link from 'next/link';

export default function Home() {
  const rooms = useStore(state => state.rooms);
  const assignedFlatmate = useStore(state => state.assignedFlatmate);

  return (
    <CardContainer>
      {rooms.map(room => (
        <Card key={room.id} name={room.name}>
          <Link href="../rooms">
            <h2>{room.name}</h2>
          </Link>
          <div style={{ display: 'flex', gap: '15px' }}>
            <Avatar alt={room.name} src={room.assignee} />
            <Circle></Circle>
            {/*   status: {room.status} */}
          </div>
        </Card>
      ))}
      <Nav></Nav>
    </CardContainer>
  );
}

const Title = styled.h1`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.primary};
`;
