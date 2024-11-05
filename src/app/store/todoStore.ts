import { create } from "zustand";

interface Todo {
  id: number; // or string, depending on your ID type
  text: string;
} 

interface TodoState{
  todos : Todo[];
  addTodo: (text: string)=> void;
  deleteTodo: (id: number)=>void;

}
const useTodoStore = create<TodoState>((set) => ({

  todos: [],

  addTodo: (text: string) =>
    set((state) => ({
      todos: [...state.todos, { id: Date.now(), text }],
    })),


  deleteTodo: (id) =>
    set((state) => ({
      todos: state.todos.filter((todo) => todo.id !== id),
    })),
}));

export default useTodoStore;