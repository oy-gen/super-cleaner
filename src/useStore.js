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
      },
    ],

    assignFlatmate: flatmateId => {
      set(state => {
        return { rooms: (state.rooms[0].assigneeId = flatmateId) };
      });
    },
    filterAssignedRooms: flatmateId => {
      set(state => {
        return {
          rooms: state.rooms.filter(room => room.assigneeId === flatmateId),
        };
      });
    },

    checkTodo: id => {
      set(state => {
        return {
          todos: state.todos.map(todo_ =>
            todo_.id === id ? { ...todo_, isChecked: !todo_.isChecked } : todo_
          ),
        };
      });
    },
    fetchedData: { results: [] },
    fetchSomething: async url => {
      try {
        const response = await fetch(url);
        const data = await response.json();
        set({ fetchedData: data });
      } catch (error) {
        console.error(`Upps das war ein Fehler: ${error}`);
      }
    },
  };
});

export default useStore;
