import React, {FC} from 'react';
import {ITaskModel} from "../../models/ITaskModel";
import styles from './Tasks.module.css'
import {Task} from "../Task/Task";
import {ITabModel} from "../../models/ITabModel";



interface ITasks {
  tasks: ITaskModel[];
}

type ITypeTasks = ITasks & { setTasks: React.Dispatch<React.SetStateAction<ITaskModel[]>> }&{tabs:ITabModel[]};

export const Tasks: FC<ITypeTasks> = ({tasks, setTasks,tabs}) => {

  const hoverLeaveRemove = () => {

    const hover = tasks.map((item) => {

        return {
          ...item,
          isDelete: false
        }

    })

    setTasks(hover);
  }
  return (
    <div className={styles.tasks} onMouseLeave={hoverLeaveRemove}>
      {tasks.filter((item)=>((tabs[2].active&&item.isActive)||(tabs[1].active&&!item.isActive)||(tabs[0].active))).map((task,index )=> (
        <Task key={task.id} text={task.text} id={task.id} isActive={task.isActive} isDelete={task.isDelete}
              isEdit={task.isEdit} setTasks={setTasks} tasks={tasks} index={index} />))}

    </div>
  );
};

