import useStore from '../../src/useStore';
import CardContainer from '../../components/CardContainer';
import styled from 'styled-components';
import Link from 'next/link';
import CircleButton from '../../components/circleButton';
import { useRouter } from 'next/router';

export default function Room() {
  const { query } = useRouter();
  const { roomPath } = query;

  const rooms = useStore(state => state.rooms);
  const room = rooms.find(room_ => room_.id === roomPath);
  const changeStatus = useStore(state => state.changeStatus);
  const assignFlatmate = useStore(state => state.assignFlatmate);
  const flatmates = useStore(state => state.flatmates);

  return (
    room && (
      <CardContainer>
        <RoomCard>
          <FlexboxColumn>
            <button>
              <Link href="/">
                <a>go back</a>
              </Link>
            </button>
            <h1>{room.name}</h1>
          </FlexboxColumn>
          <FlexboxRow>
            <p>Assignee:</p>
            <select
              onChange={event => assignFlatmate(room.id, event.target.value)}
            >
              <option value="">Select your option</option>
              {flatmates.map(flatmate => (
                <option key={flatmate.id} value={flatmate.id}>
                  {flatmate.name}
                </option>
              ))}
            </select>
          </FlexboxRow>
          <FlexboxRow>
            <p>Status:</p>
            <CircleButton
              onClick={() => {
                changeStatus();
              }}
            />
          </FlexboxRow>
          <p>
            Frequency: <span>weekly</span>
          </p>
        </RoomCard>
      </CardContainer>
    )
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
