import { Schema, model } from "mongoose"

const CategorySchema = new Schema({
    title: {
        type: String,
        required: true
    },
    tasks: {
        type: [{
            task: {
                type: Schema.Types.ObjectId,
                ref: 'Task'
            }
        }]
    }
})

const Categories = model('Category', CategorySchema)
export default Categories