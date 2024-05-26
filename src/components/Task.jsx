import { useEffect, useState } from "react";
import TasksEdit from "./TasksEdit";
import dateFormatter from "../utils/utils";

function Task({todo, onDelete, onChange, onChecked }) {
    const {id, title, completed, time} = todo;
    const [statusState, setStatusState] = useState('');

    useEffect(() => {
        if(completed) {
            setStatusState('completed');
        }
    }, [])

    function handleChange(e) {
        completed ? setStatusState('') : setStatusState('completed');
        onChecked(id, e);
    }

    function handleKeyDown(event) {
        const status = completed ? 'completed' : '';
        if(event.key === 'Enter') {
            setStatusState(status);
        }
    }

    return (
        <>
            <li className={statusState}>
                <div className="view">
                    <input className="toggle" type="checkbox" onChange={handleChange} checked={completed} />
                    <label>
                        <span className="description">{title}</span>
                        <span className="created">{`created ${dateFormatter(time)} ago`}</span>
                    </label>
                    <button className='icon icon-edit' onClick={() => setStatusState('editing')}></button>
                    <button className='icon icon-destroy' onClick={() => onDelete(id)}></button>
                </div>
                {statusState === 'editing' && <TasksEdit id={id} title={title} onChange={onChange} onKeyDown={handleKeyDown} />}
            </li>
        </>
    )
}

export default Task;

  