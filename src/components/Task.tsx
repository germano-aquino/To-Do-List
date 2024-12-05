import styles from './Task.module.css'

import { Trash } from '@phosphor-icons/react'

export interface TaskType {
    id: number,
    content: string,
    completed: boolean
}

interface taskProps {
    task: TaskType,
    onCompletedTask: (completedTaskId: number) => void,
    onDeleteTask: (taskToBeDeletedId: number) => void
}

export function Task({task, onCompletedTask, onDeleteTask}: taskProps) {
    function handleCompletedTask() {
        onCompletedTask(task.id)
    }

    function handleDeleteTask() {
        onDeleteTask(task.id)
    }

    return (
        <div className={styles.task}>
            <label>
                <input
                    type='checkbox'
                    checked={task.completed}
                    onChange={handleCompletedTask} 
                />
                <div className={styles.checkbox}></div>
                <div className={styles.taskContent}>{task.content}</div>
            </label>
            <div className={styles.deleteButton}>
                <button onClick={handleDeleteTask} title='Deletar Tarefa'>
                    <Trash />
                </button>
            </div>
        </div>
    )
}