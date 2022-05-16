import create from 'zustand';

const useStore = create(set => {
  return {
    rooms: [
      { name: 'Kitchen', id: 'KITCHENID', assigneeId: '', status: false },
      { name: 'Bathroom', id: 'BATHROOMID', assigneeId: '', status: false },
      { name: 'Livingroom', id: 'LIVINGID', assigneeId: '', status: false },
      { name: 'Hall', id: 'HALLID', assigneeId: '', status: false },
    ],
    flatmates: [
      {
        name: 'Norman',
        id: 'NormanID',
        photo: 'https://randomuser.me/api/portraits/men/3.jpg',
        assignedRooms: [],
      },
      {
        name: 'Laura',
        id: 'LauraID',
        photo: 'https://randomuser.me/api/portraits/women/73.jpg',
        assignedRooms: [],
      },
      {
        name: 'Paul',
        id: 'PaulID',
        photo: 'https://randomuser.me/api/portraits/men/1.jpg',
        assignedRooms: [],
      },
      {
        name: 'Eva',
        id: 'EvaID',
        photo: 'https://randomuser.me/api/portraits/women/56.jpg',
        assignedRooms: [],
      },
    ],

    changeStatus: () => {
      set(state => {
        return {
          rooms: state.rooms.map(room => room.status === !room.status),
        };
      });
    },
    assignFlatmate: (flatmateId) => {
      set(state => {
        return {
          rooms: (state.rooms[0].assigneeId = flatmateId),
        };
      });
    },
  };
});
// rooms: state.rooms.map((room) => room.assigneeId ? {...room, assigneeId = flatmateId } : room ))

export default useStore;

// rooms: [
//   { name: 'Kitchen', id: nanoid(), assigneeId: null, status: false },
//   { name: 'Bathroom', id: nanoid(), assigneeId: null, status: false },
//   { name: 'Livingroom', id: nanoid(), assigneeId: null, status: false },
//   { name: 'Hall', id: nanoid(), assigneeId: null, status: false },
// ],
