import { Scroll, Trash } from 'phosphor-react';
import { useState } from 'react';
import { ITasks } from '../App';
import styles from './Tasks.module.css';

interface TasksProps {
    tasks: ITasks[];
    handleChangeFinishedTask: (idTask: number) => void;
    handleDeleteTask: (idTask: number) => void;
}

export function Tasks({ tasks, handleChangeFinishedTask, handleDeleteTask }: TasksProps){
    const existsTasks = tasks.length > 0;

    const tasksFinished = tasks.filter(task => {
        return task.finished
    })

    return(
        <div className={styles.center}>
            <header className={styles.headerTasks}>
                <div className={styles.createdTasks}>
                    <strong>Tarefas criadas</strong>
                    <span className={styles.countCreatedTasks}>{tasks.length}</span>
                </div>
                <div className={styles.tasksDone}>
                    <strong>Concluídas</strong>
                    <span className={styles.countTasksDone}>{tasksFinished.length} de {tasks.length}</span>
                </div>
            </header>

            {
                existsTasks ? (
                    tasks.map(task => {
                        return (
                            <div key={task.id} className={styles.containerTasks}>
                                <input type="checkbox" className={styles.buttonCheckbox} checked={task.finished} onChange={() => handleChangeFinishedTask(task.id)}/>
                                <li className={task.finished ? styles.finishedTask : styles.taskPendent}>{task.task}</li>
                                <div>
                                    <button className={styles.buttonDeleteTask} onClick={() => handleDeleteTask(task.id)}>
                                        <Trash size={32} color="white"/>
                                    </button>
                                </div>
                            </div>
                        );
                    })
                ) : (
                    <div className={styles.contentTasks}>
                        <div>
                            <h3>Você ainda não tem tarefas cadastradas</h3>
                            <span>Crie tarefas e organize seus itens a fazer</span>
                        </div>
                    </div>
                )
            } 
        </div>
    );
}