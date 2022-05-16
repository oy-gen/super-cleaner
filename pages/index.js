import styled, { css } from 'styled-components';
import Card from '../components/card';
import useStore from '../src/useStore';
import Nav from '../components/nav';
import CardContainer from '../components/CardContainer';
import Avatar from '@mui/material/Avatar';
import Link from 'next/link';

export default function Home() {
  const rooms = useStore(state => state.rooms);
  const flatmates = useStore(state => state.flatmates);

  return (
    <CardContainer>
      {rooms.map(room => (
        <Card key={room.id} name={room.name}>
          <Link href={`./rooms/${room.id}`}>
            <h2>{room.name}</h2>
          </Link>
          <div style={{ display: 'flex', gap: '15px', alignItems: 'center' }}>
            {flatmates
              .filter(flatmate => room.assigneeId === flatmate.id)
              .map(filteredFlatmate => (
                <Avatar
                  key={filteredFlatmate.id}
                  alt={filteredFlatmate.id}
                  src={filteredFlatmate.photo}
                />
              ))}
            <StyledDisplay status={room.status} />
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

const StyledDisplay = styled.div`
  width: 38px;
  height: 38px;
  border-radius: 50%;
  outline: 2px solid black;
  background-color: red;
  transition: background 0.5s;

  ${({ status = false }) => {
    return css`
      background: ${status ? 'green' : 'red'};
    `;
  }}
`;
