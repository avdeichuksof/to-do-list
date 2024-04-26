import CategoryController from "../controller/controller-category.js"
const categoryController = new CategoryController()
import { Router } from "express"
const router = Router()

router.get('/', categoryController.getCategories)
router.get('/:cid', categoryController.getCategoriesById)
router.get('/title', categoryController.getCategoriesByTitle)

router.post('/', categoryController.createCategory)

router.put('/:cid', categoryController.editCategory)

router.delete('/:cid', categoryController.deleteCategory)

export default router