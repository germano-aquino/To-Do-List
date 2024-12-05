import { Header } from './components/Header'
import { AddTaskBar } from './components/AddTaskBar'
import { TasksGrid } from './components/TasksGrid'
import { TaskType } from './components/Task'

import { useState } from 'react'
import styles from './App.module.css'
import './global.css'

const tasks: TaskType[] = []
let lastId = -1

export function App() {
  const [taskList, setTaskList] = useState(tasks)

  function toogleCompletedStatus(completedTaskId: number) {
    let toogleTask = taskList.find(task => task.id === completedTaskId)
    if (toogleTask != undefined) {
      let newTaskList = taskList.filter(task => task.id !== completedTaskId)
      toogleTask.completed = !toogleTask.completed
      if (toogleTask.completed) {
        setTaskList([...newTaskList, toogleTask])
      } else {
        setTaskList([toogleTask, ...newTaskList])
      }
    }
  }

  function deleteTask(taskToBeDeletedId: number) {
    const newTaskList = taskList.filter(task => task.id !== taskToBeDeletedId)
    setTaskList(newTaskList)
  }

  function createTask(taskDescription: string) {
    const newTask = {
      id: getNewId(),
      completed: false,
      content: taskDescription
    }
    const newTaskList = ([newTask, ...taskList])
    setTaskList(newTaskList)
  }

  function getNewId() {
    lastId = lastId + 1
    return lastId
  }

  return (
    <div>
      <Header/>
        <div className={styles.tasksWrapper}>
          <AddTaskBar
            onCreateTask={createTask}
          />
          <TasksGrid
            tasks={taskList}
            onCompletedTask={toogleCompletedStatus}
            onDeleteTask={deleteTask}
          />
        </div>
    </div>
  )
}