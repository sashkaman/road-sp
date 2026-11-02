import { useState } from 'react'; // 1. Обязательно импортируем useState

type TaskType = {
    id: number
    title: string
    isDone: boolean
}

type PropsType = {
    title: string
    tasks: Array<TaskType>
    removeAllTasks: () => void
    removeTask: (taskId: number) => void
}

export const Todolist = (props: PropsType) => {

    type FilterValuesType = "all" | "active" | "completed";

    const [filter, setFilter] = useState<FilterValuesType>("all");

    let tasksForTodoList = props.tasks;

    if (filter === "active") {
        tasksForTodoList = props.tasks.filter(t => t.isDone === false);
    }
    if (filter === "completed") {
        tasksForTodoList = props.tasks.filter(t => t.isDone === true);
    }

    function changeFilter(value: FilterValuesType) {
        setFilter(value);
    }

    return <div>
        <h3>{props.title}</h3>
        <div>
            <input />
            <button>+</button>
        </div>
        <ul>
            {
                tasksForTodoList.map(t => <li key={t.id}>
                    <input type="checkbox" checked={t.isDone} />
                    <span>{t.title}</span>
                    <button onClick={() => { props.removeTask(t.id) }}>x</button>
                </li>)
            }
        </ul>
        <div>
            <button onClick={() => { changeFilter("all") }}>
                All
            </button>

            <button onClick={() => { changeFilter("active") }}>
                Active
            </button>

            <button onClick={() => { changeFilter("completed") }}>
                Completed
            </button>
        </div>

        <button onClick={() => { props.removeAllTasks() }} >
            Delete all tasks
        </button>
    </div >
}
