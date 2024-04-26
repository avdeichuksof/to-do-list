import { Schema, model } from "mongoose"

const TaskSchema = new Schema({
    state: {
        type: String,
        default: 'pending',
        enum: ['pending', 'done'],
    },
    description: {
        type: String,
        required: true
    },
    category: {
        type: [{
            category: {
                type: Schema.Types.ObjectId,
                ref: 'Category'
            }
        }]
    }
})

const Tasks = model('Task', TaskSchema)
export default Tasks