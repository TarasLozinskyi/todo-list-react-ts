import React, { useState} from 'react';
import styles from './TodoWindow.module.css'
import {TodoInput} from "../TodoInput/TodoInput";
import {TabBar} from "../TabBar/TabBar";
import {Tasks} from "../Tasks/Tasks";
import { ITaskModel} from "../../models/ITaskModel";
import {ITabModel, tabItems,} from "../../models/ITabModel";


export const TodoWindow = () => {
  const [tasks, setTasks] = useState<ITaskModel[]>([]);
  const [tabs, setTabs] = useState<ITabModel[]>(tabItems);


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
      console.log(tasks)


      setValueTask('');
    }
  }
  const removeAll= () =>{
    setTasks([]);
  }





  return (
    <div className={styles.todoWindow}>

      <TodoInput valueInput={valueInput} valueOnKeyDown={valueOnKeyDown}/>
      <TabBar  tabs={tabs} setTabs={setTabs}/>
      <div className={styles.removeAll}>
        <div>

        </div>
          <div className={styles.remove} onClick={removeAll}>

          </div>
      </div>
      <Tasks setTasks={setTasks} tasks={tasks} tabs={tabs}   />
    </div>
  );
};
