import useStore from '../../src/useStore';
import CardContainer from '../../components/CardContainer';
import styled from 'styled-components';
import Link from 'next/link';
import Circle from '../../components/Circle';

export default function Room(roomId) {
  const rooms = useStore(state => state.rooms);
  const flatmates = useStore(state => state.flatmates);


  return (
    <>
      <CardContainer>
        <RoomCard>
        <FlexboxColumn>
        <button style={{width:'100px'}}>
        <Link href="/">
          <a>go back</a>
        </Link>
      </button>
          <h1>{rooms.name}palceholder</h1>
          </FlexboxColumn>
          <FlexboxRow>
          <p>Assignee:</p>
          <select
            onChange={event => {
              rooms[0].assigneeID = event.target.value;
            }}
          >
            {flatmates.map(flatmate => (
              <option key={flatmate.id} value={flatmate.id}>
                {flatmate.name}
              </option>
            ))}
          </select>
        </FlexboxRow>
          <FlexboxRow>
            <p>Status:</p>
            <Circle status={rooms[0].status} />
            </FlexboxRow>
          <p>Frequency: <span>weekly</span></p>
        </RoomCard>
      </CardContainer>
    </>
  );
}

const RoomCard = styled.div`
  grid-column: 2/3;
  display: flex;
  flex-direction: column;
  align-items: right;
  justify-content: space-between;
  background-color: darkgrey;
  padding: 1rem 3rem;
  gap: 1rem;
  border-radius: 20px;
`;

const FlexboxRow = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`;

const FlexboxColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  gap: 15px;
`;