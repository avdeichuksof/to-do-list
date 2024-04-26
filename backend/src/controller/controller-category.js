import CategoryService from "../service/service-category.js"
const categoryService = new CategoryService()

class CategoryController {

    getCategories = async (req, res) => {
        try {
            // tomamos las categorias y si se encuentran las devolvemos
            const categories = await categoryService.getCategories()
            if (!categories) return res.status(400).send({ message: 'Error getting categories.' })

            return res.status(200).send({ categories: categories })
        } catch (error) {
            res.status(500).send(error)
        }
    }

    getCategoriesById = async (req, res) => {
        try {
            // tomamos el ID y buscamos la categoría
            const id = req.params.cid
            const categoryFound = await categoryService.getCategoryById(id)

            if (!categoryFound) return res.status(404).send({ message: 'Category not found. Invalid ID.' })

            return res.status(200).send({ category: categoryFound })
        } catch (error) {
            res.status(500).send(error)
        }
    }

    getCategoriesByTitle = async (req, res) => {
        try {
            // tomamos el título y buscamos la categoría
            const title = req.body
            const categoryFound = await categoryService.getCategoryByTitle(title)

            if (!categoryFound) return res.status(404).send({ message: 'Category not found. Invalid ID.' })

            return res.status(200).send({ category: categoryFound })
        } catch (error) {
            res.status(500).send(error)
        }
    }

    createCategory = async (req, res) => {
        try {
            // creamos una nueva categoría con los datos recibidos por el body
            const categoryData = req.body
            const newCategory = await categoryService.createCategory(categoryData)
            if(!newCategory) return res.status(400).sen({message: 'Error creating category'})

            return res.status(201).send({category: newCategory})
        } catch (error) {
            res.status(500).send(error)
        }
    }

    editCategory = async (req, res) => {
        try {
            // toammos ID y body
            const id = req.params.cid
            const changes = req.body

            // actualizamos la categoría
            const updateCategory = await categoryService.editCategory(id, changes)
            if(!updateCategory) return res.status(400).send({message: 'Error updating category'})

            return res.status(200).send({category: updateCategory})
        } catch (error) {
            res.status(500).send(error)
        }
    }

    deleteCategory = async (req, res) => {
        try {
            // tomamos ID
            const id = req.params.cid
            const deleteCategory = await categoryService.deleteCategory(id)
            if(!deleteCategory) return res.status(400).send({message: 'Error deleting category'})

            return res.status(200).send({ deleted: deleteCategory })
        } catch (error) {
            res.status(500).send(error)
        }
    }

}

export default CategoryController