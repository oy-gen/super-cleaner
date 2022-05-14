import styled from 'styled-components';
import Card from '../components/card';
import useStore from '../src/useStore';
import Avatar from '@mui/material/Avatar';
import Nav from '../components/nav';
import CardContainer from '../components/CardContainer';

export default function FlatMates() {
  const rooms = useStore(state => state.rooms);
  const flatmates = useStore(state => state.flatmates);

  return (
    <CardContainer>
      {flatmates.map(flatmate => (
        <Card key={flatmate.id} name={flatmate.name}>
          <FlexboxColumn>
            <FlexboxRow>
              <Avatar alt={flatmate.name} src={flatmate.photo} />
              <h2>{flatmate.name}</h2>
              <button>open</button>
            </FlexboxRow>

            <ul>
              {rooms.map(assignedroom => (
                <li key={assignedroom.id} name={assignedroom.name}>
                  {assignedroom.name}
                </li>
              ))}
            </ul>
          </FlexboxColumn>
        </Card>
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
