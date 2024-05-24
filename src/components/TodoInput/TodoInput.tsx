import React, {FC, useState} from 'react';
import styles from './TodoInput.module.css'



export const TodoInput:FC<any> = ({valueInput,valueOnKeyDown}) => {

  const [valueTask, setValueTask] = useState('')

  const handleInput =(e:React.ChangeEvent<HTMLInputElement>) =>{
    setValueTask(e.target.value)
  }
  const addNewTask = ()=>{
    valueInput(valueTask, setValueTask);
  }


  const clickEnter = (e:React.KeyboardEvent<HTMLInputElement>, )=>{
    valueOnKeyDown(e,valueTask, setValueTask);
  }

  return (
    <div className={styles.TodoInput}>
      <input type="text" value={valueTask} onChange={handleInput} onKeyDown={event => clickEnter(event)}/>
      <button onClick={addNewTask}>Add</button>
    </div>
  );
};

