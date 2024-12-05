import styles from './AddTaskBar.module.css'
import { ChangeEvent, FormEvent, InvalidEvent, useState } from 'react'

import { PlusCircle } from '@phosphor-icons/react'

interface AddTaskBarProps {
    onCreateTask: (taskDescription: string) => void
}

export function AddTaskBar({onCreateTask}: AddTaskBarProps) {
    const [newTaskDescription, setNewTaskDescription] = useState('')

    function handleCreateTask(event: FormEvent) {
        event?.preventDefault()
        onCreateTask(newTaskDescription)
        setNewTaskDescription('')
    }

    function handleChangeTaskDescription(event: ChangeEvent<HTMLTextAreaElement>) {
        event.preventDefault()
        event.target.setCustomValidity("")
        setNewTaskDescription(event.target.value)
    }

    function handleNewTaskDescriptionInvalid(event: InvalidEvent<HTMLTextAreaElement>) {
        event.target.setCustomValidity("Este campo é obrigatóri!")
    }

    let isNewTaskDescriptionEmpty = newTaskDescription.length === 0

    return (
        <form onSubmit={handleCreateTask} className={styles.addNewTask} >
          <textarea
              name='newTask'
              placeholder='Adicione uma nova tarefa'
              value={newTaskDescription}
              onChange={handleChangeTaskDescription}
              onInvalid={handleNewTaskDescriptionInvalid}
              required
          />
          <button type='submit' disabled={isNewTaskDescriptionEmpty}>
            Criar <PlusCircle/>
          </button>
        </form>
    )    
}