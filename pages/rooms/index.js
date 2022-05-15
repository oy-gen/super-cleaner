import useStore from '../../src/useStore';
import CardContainer from '../../components/CardContainer';
import styled from 'styled-components';
import Link from 'next/link';
import Circle from '../../components/Circle';

export default function Room() {
  const rooms = useStore(state => state.rooms);
  const flatmates = useStore(state => state.flatmates);
  const changeStatus = useStore(state => state.changeStatus);
  return (
    <>
      <CardContainer>
        <RoomCard>
          <FlexboxColumn>
            <button style={{ width: '100px' }}>
              <Link href="/">
                <a>go back</a>
              </Link>
            </button>
            <h1>Kitchen</h1>
          </FlexboxColumn>
          <FlexboxRow>
            <p>Assignee:</p>
            <select
              onChange={event => {
                assignFlatmate(event.target.value);
                console.log(rooms[0].assigneeId);
                console.log(flatmates);
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
            <Circle
              onClick={() => {
                changeStatus(room.id);
              }}
            />
          </FlexboxRow>
          <p>
            Frequency: <span>weekly</span>
          </p>
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
