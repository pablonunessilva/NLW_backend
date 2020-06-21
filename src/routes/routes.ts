import express from 'express'
import PointController from '../controllers/points.controller'
import ItemsController from '../controllers/items.controllers'

const router = express.Router()
const pointController = new PointController()
const itemsController = new ItemsController
/**
 * Lista os items
 */
router.get('/items', itemsController.index)
/**
 * 
 */
router.post('/points', pointController.create)
/**
 * 
 */
router.get('/points/:id', pointController.show)
/**
 * 
 */
router.get('/points', pointController.index)
export default router
