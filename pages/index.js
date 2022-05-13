import styled from 'styled-components';
import Card from '../components/card';
import useStore from '../src/useStore';

const Title = styled.h1`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.primary};
`;

export default function Home() {
  const rooms = useStore(state => state.rooms);

  return (
    <>
      {rooms.map(room => (
        <Card key={room.id} name={room.name}>
          {room.name}
          <ul>
            <li>assignee: {room.assignee}</li>
            <li>status: {room.status}</li>
          </ul>
          <button>delete</button>
        </Card>
      ))}
    </>
  );
}
