import create from 'zustand';
import { nanoid } from 'nanoid';

const useStore = create(set => {
  return {
    rooms: [
      { name: 'Kitchen', id: nanoid(), assignee: null, status: false },
      { name: 'Bathroom', id: nanoid(), assignee: null, status: false },
      { name: 'Livingroom', id: nanoid(), assignee: null, status: false },
      { name: 'Hall', id: nanoid(), assignee: null, status: false },
    ],
    flatmates: [
      {
        name: 'Norman',
        id: nanoid(),
        photo: 'https://randomuser.me/api/portraits/men/3.jpg',
      },
      {
        name: 'Laura',
        id: nanoid(),
        photo: 'https://randomuser.me/api/portraits/women/73.jpg',
      },
      {
        name: 'Paul',
        id: nanoid(),
        photo: 'https://randomuser.me/api/portraits/men/1.jpg',
      },
      {
        name: 'Eva',
        id: nanoid(),
        photo: 'https://randomuser.me/api/portraits/women/56.jpg',
      },
    ],

    addTodo: inputValue => {
      set(state => {
        return {
          todos: [
            { name: inputValue, id: nanoid(), isChecked: false },
            ...state.todos,
          ],
        };
      });
    },
    deleteTodo: id => {
      set(state => {
        return { todos: state.todos.filter(todo_ => todo_.id !== id) };
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
