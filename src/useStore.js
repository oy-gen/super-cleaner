import create from 'zustand';
import { nanoid } from 'nanoid';

const useStore = create(set => {
  return {
    rooms: [
      { name: 'Kitchen', id: nanoid(), assigneeId: null, status: false },
      { name: 'Bathroom', id: nanoid(), assigneeId: null, status: false },
      { name: 'Livingroom', id: nanoid(), assigneeId: null, status: false },
      { name: 'Hall', id: nanoid(), assigneeId: null, status: false },
    ],
    flatmates: [
      {
        name: 'Norman',
        id: nanoid(),
        photo: 'https://randomuser.me/api/portraits/men/3.jpg',
        assignedRooms: [],
      },
      {
        name: 'Laura',
        id: nanoid(),
        photo: 'https://randomuser.me/api/portraits/women/73.jpg',
        assignedRooms: [],
      },
      {
        name: 'Paul',
        id: nanoid(),
        photo: 'https://randomuser.me/api/portraits/men/1.jpg',
        assignedRooms: [],
      },
      {
        name: 'Eva',
        id: nanoid(),
        photo: 'https://randomuser.me/api/portraits/women/56.jpg',
        assignedRooms: [],
      },
    ],

    // assignFlatmate: flatmateId => {
    //   set(state => {
    //     return { rooms: (state.rooms[0].assigneeId = flatmateId) };
    //   });
    // },
    // filterAssignedRooms: flatmateId => {
    //   set(state => {
    //     return {
    //       rooms: state.rooms.filter(room => room.assigneeId === flatmateId),
    //     };
    //   });
    // },

    changeStatus: id => {
      set(state => {
        return {
          rooms: state.rooms.map(room =>
            room.id === id ? { ...room, status: !room.status } : room
          ),
        };
      });
    },
  };
});

export default useStore;
