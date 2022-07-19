import { Header } from "./Components/Header";
import { Tasks } from "./Components/Tasks";
import { PlusCircle } from "phosphor-react";
import "./global.css";
import styles from './App.module.css';
import { ChangeEvent, FormEvent, useState } from "react";

export interface ITasks {
  id: number;
  task: string;
  finished: boolean;
}

function App() {
  const [tasks, setTasks] = useState<ITasks[]>([]) ;
  const [newTask, setNewTask] = useState('');

  function handleNewTask(e: ChangeEvent<HTMLInputElement>){
    e.preventDefault();
    setNewTask(e.target.value);
  }

  function handleCreateNewTask(e: FormEvent){
    e.preventDefault();

    const createNewTask: ITasks = {
      id: Math.floor(Math.random() * 100),
      task: newTask,
      finished: false
    }
    setTasks([...tasks, createNewTask]);
    setNewTask('');
  }

  function handleFinishedTask(idTask: number){
    const tasksExists = [...tasks];

    const tasksUpdated = tasksExists.map(task => {
      if(task.id == idTask){
        task.finished = task.finished ? false : true;
      }

      return task;
    });

    setTasks(tasksUpdated);
  }

  function handleDeleteTask(idTask: number){
      const tasksExists = tasks.filter(task => {
        return task.id !== idTask;
      });

      setTasks(tasksExists);
  }

  return (
    <>
      <Header />
     
        <form onSubmit={handleCreateNewTask} className={styles.formNewText}>
              <input 
                type="text" 
                className={styles.inputText} 
                placeholder="Adicione uma nova tarefa"
                value={newTask}
                onChange={handleNewTask}
                required
              />

              <button type="submit" className={styles.buttonSubmit}>
                  Criar
                  <PlusCircle size={23} />
              </button>
          </form>
        
        <Tasks tasks={tasks} handleChangeFinishedTask={handleFinishedTask} handleDeleteTask={handleDeleteTask}/>
      
    </>
  );
}

export default App
