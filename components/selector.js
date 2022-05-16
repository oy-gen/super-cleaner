import useStore from '../src/useStore';
import { useState } from 'react';

export default function FlatmateSelector(id) {
  const rooms = useStore(state => state.rooms);
  const room = rooms.find(room_ => room_.id === id);
  const flatmates = useStore(state => state.flatmates);
  const assignFlatmate = useStore(state => state.assignFlatmate);
  return (
    <select
      onChange={eventAssign =>
        assignFlatmate(room.id, eventAssign.target.value)
      }
    >
      <option value="" disabled selected>
        Select your option
      </option>
      {flatmates.map(flatmate => (
        <option key={flatmate.id} value={flatmate.id}>
          {flatmate.name}
        </option>
      ))}
    </select>
  );
}
