import { Task, TaskType } from './Task'
import styles from './TasksGrid.module.css'

import { Clipboard } from '@phosphor-icons/react'

export interface TasksGridProps {
		tasks: TaskType[],
		onDeleteTask: (taskToBeDeletedId: number) => void,
		onCompletedTask: (completedTaskId: number) => void
}

export function TasksGrid({tasks, onDeleteTask, onCompletedTask}: TasksGridProps) {
		let tasksAmount = tasks.length
		let completedTasks = tasks.filter(task => task.completed).length

		if (tasksAmount === 0) {
				return EmptyGrid()
		}
		else {
				return (
						<div>
								<header className={styles.tasksManager}>
										<p>Tarefas criadas <span>{tasksAmount}</span></p>
										<p>Concluídas <span>{completedTasks} de {tasksAmount}</span></p>
								</header>
								<div>
										{tasks.map(task => {
												return(
														<Task 
																key={task.id}
																task={task}
																onCompletedTask={onCompletedTask}
																onDeleteTask={onDeleteTask}
														/>
												)
										}) }
								</div>
						</div>
				)
		}
}

function EmptyGrid() {
		return (
				<div>
						<header className={styles.tasksManager}>
								<p>Tarefas criadas <span>0</span></p>
								<p>Concluídas <span>0</span></p>
						</header>
						<div className={styles.emptyTasksBackground}>
								<p className={styles.clipboard}><Clipboard size={56} /></p>
								<strong>Você ainda não tem tarefas cadastradas</strong>
								<p>Crie tarefas e organize seus itens a fazer</p>
						</div>
				</div>
		)
}
