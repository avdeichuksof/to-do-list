import Tasks from '../models/model-task.js'

class TaskMethods {

    getTasks = async () => {
        const tasks = await Tasks.find({})
        return tasks
    }

    getTaskById = async (id) => {
        const task = await Tasks.findById(id)
        return task
    }

    createTask = async (newTask) => {
        const task = await Tasks.create(newTask)
        return task
    }

    editTask = async (id, newData) => {
        const task = await Tasks.updateOne({_id: id}, {$set: newData})
        return task
    }

    deleteTask = async (id) => {
        const task = await Tasks.deleteOne({_id: id})
        return task
    }

    deleteCompletedTasks = async () => {
        const tasks = await Tasks.deleteMany({state: 'done'})
        return tasks
    }
}

export default TaskMethods