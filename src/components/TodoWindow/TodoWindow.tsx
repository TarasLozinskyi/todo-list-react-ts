import React, { useState} from 'react';
import styles from './TodoWindow.module.css'
import {TodoInput} from "../TodoInput/TodoInput";
import {TabBar} from "../TabBar/TabBar";
import {Tasks} from "../Tasks/Tasks";
import {ITaskModel, taskItems} from "../../models/ITaskModel";
import {ITabModel, tabItems,} from "../../models/ITabModel";


export const TodoWindow = () => {
  const [tasks, setTasks] = useState<ITaskModel[]>(taskItems);
  const [tabs, setTabs] = useState<ITabModel[]>(tabItems);
  const [restore, setRestore] = useState<ITaskModel[]>([])

  const valueInput = (valueTask:string,  setValueTask:React.Dispatch<React.SetStateAction<string>>)=>{
    if(valueTask!==''){
     setTasks([...tasks,{
       id:Date.now(),
       text:valueTask,
       isEdit:false,
       isDelete:false,
       isActive:false,
     }])}

    setValueTask('');
  }

  const valueOnKeyDown=(e:React.KeyboardEvent<HTMLInputElement>, valueTask:string,setValueTask:React.Dispatch<React.SetStateAction<string>>)=>{
    if(e.key ==="Enter"&&valueTask!==''){
      setTasks([...tasks,{
        id:Date.now(),
        text:valueTask,
        isEdit:false,
        isDelete:false,
        isActive:false,
      }])


      setValueTask('');
    }
  }
  const removeAll= () =>{
    setRestore([...tasks]);
    setTasks([]);
  }
  const restoreAll =()=>{
    if(tasks.length===0){
      setTasks([...restore])
      setRestore([]);
    }else {
      setTasks([...tasks, ...restore]);
      setRestore([]);
    }
  }

  return (
    <div className={styles.todoWindow}>

      <TodoInput valueInput={valueInput} valueOnKeyDown={valueOnKeyDown}/>
      <TabBar  tabs={tabs} setTabs={setTabs}/>
      <div className={styles.removeAll}>
        <div>

        </div>
        <div  className={styles.flex}>
          <div className={styles.restore} onClick={restoreAll}>

          </div>
          <div className={styles.remove} onClick={removeAll}>

          </div>
        </div>
      </div>
      <Tasks setTasks={setTasks} tasks={tasks} tabs={tabs}   />
    </div>
  );
};
