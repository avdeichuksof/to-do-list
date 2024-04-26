import CategoryMethods from "../dao/methods/methods-category.js"
const categoryMethods = new CategoryMethods()

class CategoryService {

    getCategories = async () => {
        try {
            // buscamos las categorías y las devolvemos 
            const categories = await categoryMethods.getCategories()
            if (!categories) console.log('Error getting categories')

            return categories
        } catch (error) {
            throw new Error('Error getting categories: ', error)
        }
    }

    getCategoryById = async (id) => {
        try {
            // buscamos por ID
            const categoryFound = await categoryMethods.getCategoryById(id)
            if (!categoryFound) console.log('Category not found')

            return categoryFound
        } catch (error) {
            throw new Error('Error getting category: ', error)
        }
    }

    getCategoryByTitle = async (title) => {
        try {
            // buscamos por título
            const categoryFound = await categoryMethods.getCategoryByTitle(title)
            if (!categoryFound) console.log('Category not found')

            return categoryFound
        } catch (error) {
            throw new Error('Error getting category: ', error)
        }
    }

    createCategory = async (category) => {
        try {
            // validar campos
            if (!category.title) throw new Error('Complete all required fields')

            // creamos category
            const newCategory = await categoryMethods.createCategory(category)
            return newCategory
        } catch (error) {
            throw new Error('Error creating category: ', error)
        }
    }

    editCategory = async (id, newData) => {
        try {
            // validamos ID
            const categoryFound = await this.getCategoryById(id)
            if (!categoryFound) console.log('Category not found')

            // editamos la category
            const editCategory = await categoryMethods.editCategory(id, newData)
            return editCategory
        } catch (error) {
            throw new Error('Error editing category: ', error)
        }
    }

    deleteCategory = async (id) => {
        try {
            // validamos ID
            const categoryFound = await this.getCategoryById(id)
            if (!categoryFound) console.log('Category not found')

            // eliminamos la task
            const deletedCategory = await categoryMethods.deleteCategory(id)
            return deletedCategory
        } catch (error) {
            throw new Error('Error deleting category: ', error)
        }
    }
}

export default CategoryService