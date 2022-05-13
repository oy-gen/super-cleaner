import styled from 'styled-components';
import Card from '../components/card';
import useStore from '../src/useStore';
import Avatar from '@mui/material/Avatar';

export default function FlatMates() {
  const rooms = useStore(state => state.rooms);
  const flatmates = useStore(state => state.flatmates);

  return (
    <>
      {flatmates.map(flatmate => (
        <Card key={flatmate.id} name={flatmate.name}>
          <Avatar alt={flatmate.name} src={flatmate.photo} />
          {flatmate.name}
          <ul>
            {rooms.map(assignedroom => (
              <li key={assignedroom.id} name={assignedroom.name}>
                {assignedroom.name}
              </li>
            ))}
          </ul>
          <button>open</button>
        </Card>
      ))}
    </>
  );
}
