import Accordion from "./Accordion.tsx";
import {useState} from "react";
import type {Todo} from "../types/Todo.ts";

const TodoContainer = () => {

    const [userTitle, setUserTitle] = useState<string>('')

    const [isOpenAll, setIsOpenAll] = useState(false);
    const [isOpenActive, setIsOpenActive] = useState(false);
    const [isOpenCompleted, setIsOpenCompleted] = useState(false);

    const [mockData, setMockData] = useState<Todo[]>([
        { title: 'Тестовое задание', isCompleted: false }
    ]);


    function clearCompleted() {
        setMockData(prevData => prevData.filter(item => !item.isCompleted));
    }

    const addTask = () => {

        if (userTitle.length < 1) return;

        const newTask: Todo = { title: userTitle, isCompleted: false };
        setMockData(prev => [...prev, newTask]);
    };

    return (
        <div className='bg-[rgb(245,245,245)] p-5 max-w-[500px] w-full mx-auto flex flex-col gap-2'>
            <h1 className='text-4xl mx-auto mb-5'>Todos</h1>
            <div className="flex gap-2">
                <input
                    onChange={(e) => setUserTitle(e.target.value)}
                    type="text"

                    className="flex-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Your task..."
                />
                <button onClick={addTask} className="px-4 py-2 w-fit bg-blue-500 text-white  cursor-pointer">
                    Add
                </button>
            </div>

            <Accordion setData={setMockData} isOpen={isOpenAll} setIsOpen={setIsOpenAll} title='All' data={mockData} />
            <Accordion setData={setMockData} isOpen={isOpenActive} setIsOpen={setIsOpenActive} title='Active tasks' data={mockData.filter(item => !item.isCompleted)} />
            <Accordion setData={setMockData} isOpen={isOpenCompleted} setIsOpen={setIsOpenCompleted} title='Completed tasks' data={mockData.filter(item => item.isCompleted)} />
            <p>Left: {mockData.filter(task => !task.isCompleted).length} tasks</p>
            <button onClick={clearCompleted} className="px-4 py-2 w-fit bg-blue-500 text-white  cursor-pointer">
                Clear completed
            </button>
        </div>
    );
};

export default TodoContainer;