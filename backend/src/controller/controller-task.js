import TaskService from "../service/service-task.js"
const taskService = new TaskService()

class TaskController {

    getTasks = async (req, res) => {
        try {  
            // tomamos las tasks y si se encuentran las devolvemos
            const tasks = await taskService.getTasks()
            if (!tasks) return res.status(400).send({ message: 'Error getting tasks.' })

            return res.status(200).send({ tasks: tasks })
        } catch (error) {
            res.status(500).send(error)
        }
    }

    getTasksById = async (req, res) => {
        try {
            // tomamos el ID y buscamos la task
            const id = req.params.tid
            const taskFound = await taskService.getTaskById(id)

            if (!taskFound) return res.status(404).send({ message: 'Task not found. Invalid ID.' })

            return res.status(200).send({ task: taskFound })
        } catch (error) {
            res.status(500).send(error)
        }
    }

    createTask = async (req, res) => {
        try {
            // creamos una nueva task con los datos recibidos por el body
            const taskData = req.body
            const newTask = await taskService.createTask(taskData)
            if (!newTask) return res.status(400).send({ message: 'Error creating task.' })

            return res.status(201).send({ task: newTask })
        } catch (error) {
            res.status(500).send(error)
        }
    }

    editTask = async (req, res) => {
        try {
            // tomamos ID y body
            const id = req.params.tid
            const changes = req.body
            // actualizamos la task con los nuevos datos
            const updateTask = await taskService.editTask(id, changes)
            if (!updateTask) return res.status(400).send({ message: 'Error updating task.' })

            return res.status(200).send({ task: updateTask })
        } catch (error) {
            res.status(500).send(error)
        }
    }

    deleteTask = async (req, res) => {
        try {
            // borramos la task con el ID recibido
            const id = req.params.tid
            const deleteTask = await taskService.deleteTask(id)
            if (!deleteTask) return res.status(400).send({ message: 'Error deleting task.' })

            return res.status(200).send({ deleted: deleteTask })
        } catch (error) {
            res.status(500).send(error)
        }
    }

    deleteCompletedTasks = async (req, res) => {
        try {
            // validamos que haya tasks completas
            const tasks = await taskService.getTasks()
            const completed = tasks.filter(task => task.status === 'done')

            if (completed.length < 1) return res.status(200).send({message: 'No completed tasks found'})

            // si hay tasks completas, se eliminan
            const deleteCompleted = await taskService.deleteCompletedTasks()
            if (!deleteCompleted) return res.status(400).sned({ message: 'Error deleting tasks' })

            return res.status(200).send({deleted: deleteCompleted})
        } catch (error) {
            res.status(500).send(error)
        }
    }

}

export default TaskController