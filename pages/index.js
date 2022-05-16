import styled from 'styled-components';
import Card from '../components/card';
import useStore from '../src/useStore';
import Nav from '../components/nav';
import CardContainer from '../components/CardContainer';
import Avatar from '@mui/material/Avatar';
import CircleButton from '../components/circleButton';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Home() {
  const rooms = useStore(state => state.rooms);
  const assignFlatmate = useStore(state => state.assignFlatmate);

  console.log(...rooms);
  return (
    <CardContainer>
      {rooms.map(room => (
        <Card key={room.id} name={room.name}>
          <Link href={`../rooms/${room.id}`}>
            <h2>{room.name}</h2>
          </Link>
          <div style={{ display: 'flex', gap: '15px', alignItems: 'center' }}>
            <Avatar alt={room.name} src={room.assigneeId} />
            <CircleButton />
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
