'use client'
import { useState } from 'react';
import useTodoStore from '../store/todoStore';

const TodoList = () => {
    const [task, setTask] = useState('');
    const [isEdit, setIsEdit] = useState(false);
    const [editText, setEditText] = useState('');
    const [editId, setEditId] = useState<number>(0);
    const todos = useTodoStore((state) => state.todos);
    const addTodo = useTodoStore((state) => state.addTodo);
    const deleteTodo = useTodoStore((state) => state.deleteTodo);
    const updateTodo = useTodoStore((state) => state.updateTodo);

    const handleAddTask = () => {
        if (task) {
            addTodo(task);
            setTask('');
        }
    };
    const handleUpdate = (id: number, text: string) => {
        setIsEdit(true);
        setEditId(id);
        setEditText(text);
    };

    const handleUpdateTask = (id: number) => {
        if (editText) {
            updateTodo(id, editText);
            setIsEdit(false);
            setEditText('');
        }
    };

    return (
        <div className='w-full max-w-md mx-auto mt-10 p-6 bg-slate-400 rounded-lg shadow-lg flex flex-col items-center'>
            <h1 className='text-2xl font-bold mb-4'>To-Do List</h1>
            <div>
                <input
                    type="text"
                    value={task}
                    onChange={(e) => setTask(e.target.value)}
                    placeholder="Enter a task"
                    className="flex-grow p-2 rounded-l-md border border-gray-300 focus:outline-none"
                />
                <button onClick={handleAddTask}
                    className="bg-blue-500 text-white px-4 py-2 rounded-r-md hover:bg-blue-600"
                >Add Task</button>
            </div>

            <ul>
                {todos.map((todo) => (
                    <li key={todo.id}
                        className="flex justify-between items-center p-2 mb-2 rounded-md shadow gap-4">
                        {isEdit && editId === todo.id ? (
                            <div>
                                <input
                                    type="text"
                                    value={editText}
                                    onChange={(e) => setEditText(e.target.value)}
                                    className="flex-grow p-1 border border-gray-300 rounded-md"
                                />
                                <button onClick={() => handleUpdateTask(todo.id)}
                                    className="bg-green-500 text-white px-2 py-1 rounded hover:bg-green-600"
                                >Save</button>
                                <button onClick={() => {
                                    setIsEdit(false);
                                    setEditText('');
                                }}
                                 className="bg-gray-500 text-white px-2 py-1 rounded hover:bg-gray-600"
                                >Cancel</button>
                            </div>
                        ) : (
                            <div className='flex gap-3'>
                                {todo.text}
                                <button onClick={() => handleUpdate(todo.id, todo.text)}
                                    className="bg-yellow-300 text-white px-2 py-1 rounded hover:bg-yellow-600"
                                >Edit</button>
                                <button onClick={() => deleteTodo(todo.id)}
                                    className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
                                >Delete</button>
                            </div>
                        )}
                    </li>
                ))}
            </ul>
        </div >
    );
};

export default TodoList;