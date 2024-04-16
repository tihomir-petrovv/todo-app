import { useState } from "react"
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./Todos.css"

export default function TodoHeader() {
    const [date, setDate] = useState<Date>(new Date())
    const [userTasks, setUserTasks] = useState<[string, string, string][]>([])
    const [task, setTask] = useState<string>("")
    const [noTaskError, setNoTaskError] = useState<boolean>(false)

    const addTask = (e: string) => {
        if (!e) {
            setNoTaskError(true)
            setTimeout(() => {
                setNoTaskError(false)
            }, 3000)
            return
        } else {
            setUserTasks([...userTasks, [e, new Date().toLocaleString(), date.toLocaleString()]])
            setTask("")
            setNoTaskError(false)
        }
    }

    const hideNoTaskError = () => {
        setNoTaskError(false)
    }

    return (
        <>
            {noTaskError && <div className="error">
                <h4>Please enter a task</h4>
                <button onClick={hideNoTaskError}>✖️</button>
            </div>}
            <h1>Todo App</h1>
            <table className="todos">
                <thead>
                    <tr>
                        <th>Task</th>
                        <th>Created on</th>
                        <th>Due</th>
                    </tr>
                </thead>
                <tbody>
                    {userTasks.length > 0 && userTasks.map((t, i) => {
                        return (
                            <tr key={i}>
                                <td>{t[0]}</td>
                                <td>{t[1]}</td>
                                <td>{t[2]}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
            <input type="text" placeholder="Enter a task"
                value={task}
                onChange={(e) => {
                    setTask(e.target.value)
                }} />
            <ReactDatePicker selected={date}
                onChange={(date: Date) => setDate(date)}
                dateFormat="MMMM d, yyyy h:mm aa"
                showTimeSelect
            />
            <button onClick={() => addTask(task)}>Add</button>
        </>
    )
}