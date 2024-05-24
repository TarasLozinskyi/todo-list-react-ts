import React, {FC} from 'react';
import {ITaskModel} from "../../models/ITaskModel";
import styles from './Task.module.css'


type ITypeTask =
  ITaskModel
  & { tasks: ITaskModel[] }
  & { setTasks: React.Dispatch<React.SetStateAction<ITaskModel[]>> }
  & { index: number }

export const Task: FC<ITypeTask> = ({id, text, isDelete, isActive, tasks, setTasks, index,}) => {

  const hoverEnterRemove = () => {

    const hover = tasks.map((item) => {
      if (id === item.id) {
        return {
          ...item,
          isDelete: true
        }
      }
      else{
        return {
          ...item,
          isDelete: false
        }
      }
    })

    setTasks(hover);
  }

  // const notHover =()=>{
  //
  // }
  const removeTask = ()=>{
    setTasks([...tasks.slice(0,index),...tasks.slice(index+1, tasks.length)])
  }

  const iconActiveChange = () => {
    const active = tasks.map((item) => {
      if (id === item.id) {
        return {
          ...item,
          isActive: !item.isActive,
        }
      }
      return item;

    })
    setTasks(active);
  }



  return (
    <div className={styles.task} onMouseEnter={hoverEnterRemove}>
      <div className={styles.taskOneBlock}>
        <div className={styles.active} onClick={iconActiveChange}>
          {isActive ? <svg xmlns="http://www.w3.org/2000/svg"
                           viewBox="0 0 512 512">
              <path
                d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-111 111-47-47c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l64 64c9.4 9.4 24.6 9.4 33.9 0L369 209z"/>
            </svg> :
            <svg xmlns="http://www.w3.org/2000/svg"
                 viewBox="0 0 512 512">
              <path
                d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256z"/>
            </svg>}
        </div>
        <div className={isActive?styles.taskTitleThrough:styles.taskTitle}>
          {text}
        </div>
      </div>
      <div className={isDelete ? styles.remove : styles.removeNone} onClick={removeTask}>
        ✗
      </div>
    </div>
  );
};

