import useStore from '../src/useStore';
import { useState } from 'react';

export default function FlatmateSelector() {
  const rooms = useStore(state => state.rooms);
  const flatmates = useStore(state => state.flatmates);
  const assignFlatmate = useStore(state => state.assignFlatmate);
  return (
    <select
      onChange={event => {
        assignFlatmate(event.target.value);
        console.log(event.target.value);
        console.log(rooms);
      }}
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
