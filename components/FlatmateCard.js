import styled, { css } from 'styled-components';
import Card from '../components/card';
import useStore from '../src/useStore';
import Avatar from '@mui/material/Avatar';
import { useState } from 'react';

export default function FlatmateCard({ flatmate }) {
  const [showDetails, setShowDetails] = useState(false);
  const rooms = useStore(state => state.rooms);

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
                  <StyledDisplay status={assignedroom.status} />
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
