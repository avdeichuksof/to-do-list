import TaskMethods from '../dao/methods/methods-task.js'
const taskMethods = new TaskMethods()

class TaskService {
    getTasks = async () => {
        try {
            // buscamos las tasks y las devolvemos
            const tasks = await taskMethods.getTasks()
            if (!tasks) console.log('Error getting tasks')

            return tasks
        } catch (error) {
            throw new Error('Error getting tasks: ', error)
        }
    }

    getTaskById = async (id) => {
        try {
            // validamos ID
            const taskFound = await taskMethods.getTaskById(id)
            if (!taskFound) console.log('Error getting task, invalid ID.')

            return taskFound
        } catch (error) {
            throw new Error('Error getting task: ', error)
        }
    }

    createTask = async (task) => {
        try {
            // validamos los campos
            if (!task.description || !task.category) throw new Error('Fill all required fields.')
            
            // creamos task
            const newTask = await taskMethods.createTask(task)
            return newTask
        } catch (error) {
            throw new Error('Error creating task: ', error)
        }
    }

    editTask = async (id, newData) => {
        try {
            // validamos ID
            const taskFound = await this.getTaskById(id)
            if (!taskFound) console.log('Task not found')

            // editamos la task
            const updateTask = await taskMethods.editTask(id, newData)
            return updateTask
        } catch (error) {
            throw new Error('Error editing task: ', error)
        }
    }

    deleteTask = async (id) => {
        try {
            // validamos ID
            const taskFound = await this.getTaskById(id)
            if (!taskFound) console.log('Task not found')

            // eliminamos la task
            const deletedTask = await taskMethods.deleteTask(id)
            return deletedTask
        } catch (error) {
            throw new Error('Error deleting task: ', error)
        }
    }

    deleteCompletedTasks = async () => {
        try {
            // eliminamos las tasks completadas {state: 'done'}
            const deleteCompleted = await taskMethods.deleteCompletedTasks()
            return deleteCompleted
        } catch (error) {
            throw new Error('Error deleting tasks: ', error)
        }
    }

}

export default TaskService