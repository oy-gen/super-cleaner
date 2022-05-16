import create from 'zustand';

const useStore = create(set => {
  return {
    rooms: [
      {
        name: 'Kitchen',
        id: 'KITCHENID',
        assigneeId: '',
        status: false,
      },
      {
        name: 'Bathroom',
        id: 'BATHROOMID',
        assigneeId: 'NormanID',
        status: false,
      },
      {
        name: 'Livingroom',
        id: 'LIVINGID',
        assigneeId: 'NormanID',
        status: false,
      },
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

    changeStatus: id => {
      set(status => {
        const updatedRooms = status.rooms.map(room => {
          if (room.id === id) {
            room.status = !room.status;
            return room;
          }
          return room;
        });
        return {
          rooms: updatedRooms,
        };
      });
    },

    assignFlatmate: (roomId, flatmateId) => {
      set(state => {
        const updatedMates = state.rooms.map(room => {
          if (room.id === roomId) {
            room.assigneeId = flatmateId;
            return room;
          }
          return room;
        });
        return {
          rooms: updatedMates,
        };
      });
    },
  };
});

export default useStore;
