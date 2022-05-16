import styled from 'styled-components';
import Card from '../components/card';
import useStore from '../src/useStore';
import Avatar from '@mui/material/Avatar';
import CircleButton from '../components/circleButton';
import { useState } from 'react';
import FlatMates from '../pages/flatmates';

export default function FlatmateCard({ flatmate }) {
  const [showDetails, setShowDetails] = useState(false);
  const rooms = useStore(state => state.rooms);
  const flatmates = useStore(state => state.flatmates);

  return (
    <Card>
      <FlexboxColumn>
        <FlexboxRow>
          <div>
            <Avatar alt={flatmate.name} src={flatmate.photo} />
            <h2>{flatmate.name}</h2>
          </div>
          <button onClick={() => setShowDetails(!showDetails)}>open</button>
        </FlexboxRow>
        {showDetails ? (
          <FlexboxRow>
            {rooms
              .filter(room => room.assigneeId === flatmate.id)
              .map(assignedroom => (
                <div key={assignedroom.id} name={assignedroom.name}>
                  {assignedroom.name}
                  <CircleButton />
                </div>
              ))}
          </FlexboxRow>
        ) : null}
      </FlexboxColumn>
    </Card>
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
