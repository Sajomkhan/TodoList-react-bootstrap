import React from 'react'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleCheck,
  faPenToSquare,
  faTrashCan,
} from "@fortawesome/free-regular-svg-icons";


const ToDo = ({toDo, markDone, setUpdateData, deleteTask}) => {
  return (
    <>
        {toDo && toDo
        .sort((a, b) => (a.id > b.id ? 1 : -1))
        .map((task, index) => {
            return (
                <React.Fragment key={task.id}>
                <div className="col taskBg">
                    <div className={task.status ? "done" : ""}>
                    <span className="taskNumber">{index + 1}</span>
                    <span className="taskText">{task.title}</span>
                    </div>
                    {/* seclect task */}
                    <div className="iconsWrap">
                    <span
                        title="Completed / Not Completed"
                        onClick={() => markDone(task.id)}>
                        <FontAwesomeIcon icon={faCircleCheck} />
                    </span>
                    {/* update Data */}
                    {task.status ? null : (
                        <span
                        title="Edit"
                        onClick={() =>
                            setUpdateData({
                            id: task.id,
                            title: task.title,
                            status: task.status ? true : false,
                            })
                        }>
                        <FontAwesomeIcon icon={faPenToSquare} />
                        </span>
                    )}
        {/* Delete Task */}
                    <span title="Delete" onClick={(e) => deleteTask(task.id)}>
                        <FontAwesomeIcon icon={faTrashCan} />
                    </span>
                    </div>
                </div>
                </React.Fragment>
            );
        })}
    </>
  )
}

export default ToDo