import TaskController from '../controller/controller-task.js'
const taskController = new TaskController()
import { Router } from 'express'
const router = Router()

router.get('/', taskController.getTasks)
router.get('/:tid', taskController.getTasksById)

router.post('/', taskController.createTask)

router.put('/:tid', taskController.editTask)

router.delete('/:tid', taskController.deleteTask)
router.delete('/done', taskController.deleteCompletedTasks)

export default router