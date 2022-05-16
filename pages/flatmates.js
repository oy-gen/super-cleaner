import styled from 'styled-components';
import Card from '../components/card';
import useStore from '../src/useStore';
import Avatar from '@mui/material/Avatar';
import Nav from '../components/nav';
import CardContainer from '../components/CardContainer';
import CircleDisplay from '../components/circleDisplay';

export default function FlatMates() {
  const rooms = useStore(state => state.rooms);
  const flatmates = useStore(state => state.flatmates);
  const filterAssignedRooms = useStore(state => state.filterAssignedRooms);

  return (
    <CardContainer>
      {flatmates.map(flatmate => (
        <Card key={flatmate.id} name={flatmate.name}>
          <FlexboxColumn>
            <FlexboxRow>
              <div
                style={{ display: 'flex', alignItems: 'center', gap: '15px' }}
              >
                <Avatar alt={flatmate.name} src={flatmate.photo} />
                <h2>{flatmate.name}</h2>
              </div>
              <button
                onClick={() =>
                  filterAssignedRooms(flatmate.id).map(room => (
                    <div key={room.id} name={room.name}>
                      {room.name}
                    </div>
                  ))
                }
              >
                open
              </button>
            </FlexboxRow>

            <FlexboxRow>
              {rooms.map(assignedroom => (
                <div key={assignedroom.id} name={assignedroom.name}>
                  {assignedroom.name}
                  <CircleDisplay />
                </div>
              ))}
            </FlexboxRow>
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
