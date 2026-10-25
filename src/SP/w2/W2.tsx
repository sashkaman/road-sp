import { useState } from 'react';
import { Todolist } from './TodoList';

export const W2 = () => {
    let [tasks, setTasks] = useState([
        { id: 1, title: "HTML&CSS", isDone: true },
        { id: 2, title: "JS", isDone: true },
        { id: 3, title: "ReactJS", isDone: false },
        { id: 4, title: "Rest API", isDone: false },
        { id: 5, title: "GraphQL", isDone: false },
    ]);

    function removeTask(id: number) {
        let filteredTasks = tasks.filter(t => t.id != id);
        setTasks(filteredTasks);
    }

    function removeTaskAll() {
        setTasks([]);
    }

    return (
        <div className="">
            <Todolist title="What to learn"
                tasks={tasks}
                removeTask={removeTask}
                removeTaskAll={removeTaskAll}
            />
        </div>
    );
}
