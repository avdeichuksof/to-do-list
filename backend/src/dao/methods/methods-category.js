import Categories from '../models/model-category.js'

class CategoryMethods {

    getCategories = async () => {
        const categories = await Categories.find({})
        return categories
    }

    getCategoryById = async (id) => {
        const category = await Categories.findById(id)
        return category
    }

    getCategoryByTitle = async (title) => {
        const category = await Categories.findOne({title: title})
        return category
    }

    createCategory = async (newCategory) => {
        const category = await Categories.create(newCategory)
        return category
    }

    editCategory = async (id, newData) => {
        const category = await Categories.updateOne({_id: id}, {$set: newData})
        return category
    }

    deleteCategory = async (id) => {
        const category = await Categories.deleteOne({_id: id})
        return category
    }
}

export default CategoryMethods