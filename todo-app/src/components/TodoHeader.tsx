import { useState } from "react"
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function TodoHeader() {
    const [ date, setDate ] = useState<Date>(new Date())
    const [ userTasks, setUserTasks ] = useState<string[]>([])
    const [ task, setTask ] = useState<string>("")

    const addTask = (e: string) => {
        if(e !== "") setUserTasks([...userTasks, [e, date.toLocaleDateString()].join(" ")])
    }

    return (
        <header className="header">
            <div>
                <h1>Todo App</h1>
                {userTasks.length > 0 && userTasks.map((t, i) => {
                    return (
                        <div key={i}>
                            <h3>Task {i+1}:</h3>
                            <p>{t}</p>
                        </div>
                    )
                })}
                <input type="text" placeholder="Enter a task" onChange={(e) => {
                    setTask(e.target.value)
                }}/>
                <button onClick={() => addTask(task)}>Add</button>
                <ReactDatePicker selected={date}
                onChange={(date: Date) => setDate(date)}
                dateFormat="MMMM d, yyyy h:mm aa"
                showTimeSelect
                />
            </div>
        </header>
    )
}